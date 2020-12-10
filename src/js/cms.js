import React from "react";
import CMS from "netlify-cms-app";

// Import main site styles as a string to inject into the CMS preview pane
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.css";

import PostPreview from "./cms-preview-templates/post";

CMS.registerPreviewStyle(styles, { raw: true });
CMS.registerPreviewTemplate("post", PostPreview);
CMS.init();
