module.exports = {
  root: true,
  extends: [
    "react-app",
    "react-app/jest",
    "airbnb",
    "prettier",
    "plugin:jsx-a11y/strict",
    "plugin:storybook/recommended"
  ],
  plugins: [
    "@emotion",
    "jsx-a11y"
  ],
  overrides: [
    {
      files: "**/*.test.tsx",
      rules: {
        "react/jsx-no-constructed-context-values": "off"
      }
    }
  ],
  rules: {
    "react/no-unknown-property": [
      'error',
      {
        ignore: ['css', 'external-course-id', 'campus-description', 'career-id']
      }
    ],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": [
      "error"
    ],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error"
    ],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": [
      "error"
    ],
    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": [
      "error"
    ],
    "no-undef": "off",
    "react/prefer-stateless-function": [
      "off"
    ],
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [
          ".js",
          ".jsx",
          ".tsx"
        ]
      }
    ],
    "react/forbid-prop-types": [
      0
    ],
    "react/jsx-props-no-spreading": [
      "off"
    ],
    "react/jsx-one-expression-per-line": [
      "off"
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true
      }
    ],
    "import/no-named-as-default": [
      0
    ],
    "jsx-a11y/label-has-for": [
      2,
      {
        components: [
          "Label"
        ],
        required: {
          every: [
            "id"
          ]
        },
        allowChildren: true
      }
    ],
    "react/no-unstable-nested-components": [
      "error",
      {
        allowAsProps: true
      }
    ],
    "react/function-component-definition": 0,
    "@emotion/jsx-import": "error",
    "@emotion/no-vanilla": "error",
    "@emotion/import-from-emotion": "error",
    "@emotion/styled-import": "error",
    "@emotion/pkg-renaming": "error",
    "import/no-unresolved": "off",
    "import/extensions": "off"
  }
}
