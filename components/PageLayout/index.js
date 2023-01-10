import { useEffect } from "react";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// Soft UI Dashboard React components
import SuiBox from "../SuiBox";

import { useRouter } from "next/router";
// Soft UI Dashboard React context

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectLayout, setLayout } from "../../redux/index";

function PageLayout({ background, children }) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { pathname } = router.pathname;

  useEffect(() => {
    dispatch(setLayout("page"));
  }, [pathname]);

  return (
    <SuiBox
      width="100vw"
      height="100%"
      minHeight="100vh"
      bgColor={background}
      sx={{ overflowX: "hidden" }}
    >
      {children}
    </SuiBox>
  );
}

// Setting default values for the props for PageLayout
PageLayout.defaultProps = {
  background: "default",
};

// Typechecking props for the PageLayout
PageLayout.propTypes = {
  background: PropTypes.oneOf(["white", "light", "default"]),
  children: PropTypes.node.isRequired,
};

export default PageLayout;
