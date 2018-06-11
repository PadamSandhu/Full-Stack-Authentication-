import * as React from "react";
import requireAuth from "./requireAuth";

 class FeatureClass extends React.Component {
    public render() {
        return (
            <div>
                This is the feature!!
            </div>
        );
    }
}

export const Feature = requireAuth(FeatureClass);
