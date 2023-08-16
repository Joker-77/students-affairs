import React, {useEffect, useState} from "react";
import Admin from "../../../../layouts/Admin";
import Card from "../../../../components/Card/Card.js";
import CardHeader from "../../../../components/Card/CardHeader.js";
import CardBody from "../../../../components/Card/CardBody.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../../../assets/jss/nextjs-material-dashboard/views/rtlStyle.js";
import { Grid } from "@material-ui/core";
import Desire from "../../../../components/Desire/Desire";

import {
  DragDropContext,
  Droppable,
  Draggable,
  resetServerContext,
} from "react-beautiful-dnd";
import {useTranslation} from "../../../../Utility/Translations/useTranslation";
import SpecialityService from "../../../../Services/SpecialityService";
import DesireService from "../../../../Services/DesireService";
import {IDesireModel} from "../../../../Models/ApiResponse/DesireModel";
import SuiButton from "../../../../components/SuiButton";

interface IDesireListProps {candidateId: number}
const CandidateDesireList: React.FC<IDesireListProps> = ({candidateId}) => {
  resetServerContext();
  const {translate} = useTranslation();
  const useStyles = makeStyles(styles);
  const [Desires, setDesires] = React.useState<IDesireModel[]>(null);
  const [columns, setColumns] = useState({});

  const getSpecialities = () => {
    SpecialityService.GetAll()
        .then((res) => {
          console.log("Speciality", res);
          setColumns({
            system: {
              type: 1,
              name: translate('Desires'),
              items: res.result.map((item) => {return {...item, id: item.id.toString()}}),
            },
          });
        })
        .catch((error) => {
          console.error("error", error);
        });
  };

  /************************** Data ****************************/
  useEffect(() => {
    DesireService.GetAll(candidateId)
        .then((res) => {
          console.log("Desire", res);
          const desires = res.result;
          if(desires.length > 0) {
              setColumns({
                  system: {
                      type: 1,
                      name: translate('Desires'),
                      items: desires.map((item) => {return {...item.speciality, id: item.speciality_id.toString()}}),
                  },
              });
          } else {
              getSpecialities();
          }
        })
        .catch((error) => {
          console.error("error", error);
        });
  }, []);
  /************************** Finish Data ****************************/

  const [isSubmitting, setSubmitting] = useState(false);
  /************************** Handle edit data ****************************/
  const submitUpdateDesire = async () => {
      setSubmitting(true);
      console.log("items order: ", columns.system.items);
      const values = {
          candidate_id: candidateId,
          desires: columns.system.items.map((item, index) => {return {speciality_id: item.id, order: index + 1}})
      }
      DesireService.Save(values)
          .then((res) => {
              console.log("Desire", res);
          })
          .catch((error) => {
              console.error("error", error);
          })
          .finally(() => {
              setSubmitting(false);
          });
  };
  /************************** Finish Edit Data ****************************/


  const onDragEnd = (result, columns, setColumns) => {
    console.log(result, columns);
    if (!result.destination) return;
    const { source, destination } = result;

    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });

  };

    const getShortName = (code) => {
        const shortNames = {
            'se': 'معلوماتية',
            'Elc': 'نظم',
            'Mate': 'مواد',
            'Telec': 'اتصالات',
            'Avite': 'طيران',
            'mec': 'ميكا',
        };
        return shortNames[code] || '';
    }

  return (
      <div>
        <DragDropContext
            onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          <Grid container xs={12} md={12} sm={12}>
            {Object.entries(columns).map(([columnId, column], index) => {
              return (
                  <Grid
                      md={12}
                      xs={12}
                      sm={12}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                      key={columnId}
                  >
                    <Card>
                      <CardHeader>
                        <h4 style={{ fontWeight: "bold", color: "#01579b" }}>{column.name}</h4>
                      </CardHeader>
                      <CardBody>
                        <Droppable droppableId={columnId} key={columnId}>
                          {(provided, snapshot) => {
                            return (
                                <Grid
                                    md={12}
                                    container
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    style={{
                                      background: snapshot.isDraggingOver
                                          ? "rgb(1, 87, 155, 0.4)"
                                          : "rgba(211, 211, 211, 0.15)",
                                      padding: 20,
                                      marginBottom: 20,
                                      borderRadius: 10,
                                    }}
                                >
                                  {column.items.map((item, index) => {
                                    return (
                                        <Draggable
                                            key={item.id}
                                            draggableId={item.id}
                                            index={index}
                                        >
                                          {(provided, snapshot) => {
                                            return (
                                                <Grid
                                                    md={12}
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={{
                                                      userSelect: "none",
                                                      margin: "3px 0 3px 0",
                                                      padding: "0 20px",
                                                      borderRadius: "12px",
                                                      backgroundColor: snapshot.isDragging
                                                          ? "#c2c2c2"
                                                          : "white",
                                                      color: "black",
                                                      ...provided.draggableProps.style,
                                                    }}
                                                >
                                                  <Desire
                                                      id={item.id}
                                                      index={index}
                                                      name={getShortName(item.code)}
                                                      key={item.id}
                                                      type={column.type}
                                                  ></Desire>
                                                </Grid>
                                            );
                                          }}
                                        </Draggable>
                                    );
                                  })}
                                  {provided.placeholder}
                                </Grid>
                            );
                          }}
                        </Droppable>

                          {isSubmitting ? (
                              <SuiButton
                                  disabled={true}
                                  variant="gradient"
                                  color="info"
                                  fullWidth
                              >
                                  {translate("Processing ...")}
                              </SuiButton>
                          ) : (
                              <SuiButton
                                  variant="gradient"
                                  color="info"
                                  fullWidth
                                  onClick={submitUpdateDesire}
                              >
                                  {translate("Save")}
                              </SuiButton>
                          )}


                      </CardBody>
                    </Card>
                  </Grid>
              );
            })}
          </Grid>
        </DragDropContext>
      </div>
  );
}

(CandidateDesireList as any).auth = true;
(CandidateDesireList as any).layout = Admin;
export default CandidateDesireList;
