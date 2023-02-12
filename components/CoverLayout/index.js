// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@material-ui/core/Grid";

// Soft UI Dashboard React components
import { Box, Typography } from "@material-ui/core";

// Soft UI Dashboard React examples
import PageLayout from "../PageLayout/index";
import {useRouter} from "next/router";

function CoverLayout({
  color,
  header,
  title,
  description,
  image,
  top,
  children,
}) {
  const { locale } = useRouter();

  return (
    <PageLayout background="white">
      <Grid
        container
        style={{ justifyContent: "center", direction: locale === 'ar' ? 'rtl' : 'ltr' }}
        sx={{
          minHeight: "75vh",
          margin: 0,
        }}
      >
        <Grid item xs={11} sm={8} md={5} xl={3}>
          <Box mt={top}>
            <Box pt={3} px={3}>
              {!header ? (
                <>
                  <Box mb={1}>
                    <Typography
                      variant="h3"
                      fontWeight="bold"
                      color={color}
                      textGradient
                    >
                      {title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" fontWeight="regular" color="text">
                    {description}
                  </Typography>
                </>
              ) : (
                header
              )}
            </Box>
            <Box p={3}>{children}</Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box
            height="100%"
            display={{ xs: "none", md: "block" }}
            position="relative"
            // right={{ md: "-12rem", xl: "-16rem" }}
            left={{ md: "-15rem", xl: "-20rem" }}
            mr={-16}
            sx={{
              transform: `skewX(${locale === 'ar' ? '+' : '-'}10deg)`,
              overflow: "hidden",
              borderBottomLeftRadius: ({ borders: { borderRadius } }) =>
                borderRadius.lg,
            }}
          >
            <Box
              ml={-8}
              height="100%"
              sx={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                transform: locale === 'ar' ? "skewX(0deg)" : "skewX(10deg)",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </PageLayout>
  );
}

// Setting default values for the props of CoverLayout
CoverLayout.defaultProps = {
  header: "",
  title: "",
  description: "",
  color: "info",
  top: 20,
};

// Typechecking props for the CoverLayout
CoverLayout.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  header: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  top: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default CoverLayout;
