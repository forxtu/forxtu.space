import React, { useState } from "react";

// components
import Layout from "components/Layout";

const wrapLayout = WrappedComponent => {
  return () => {
    const [isWrapped] = useState(true);

    return (
      <Layout>
        <WrappedComponent {...this.props} />
      </Layout>
    );
  };
};

export default wrapLayout;
