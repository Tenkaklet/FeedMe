module.exports = {
    overrides: [
        {
            files: ["**/*.scss"],
            customSyntax: require("postcss-scss"),
            extends: ["stylelint-config-standard"],
            rules: {
                "indentation": null,
                "at-rule-no-unknown": null,
                "no-empty-source": null,
                "max-empty-lines": 2,
                "no-missing-end-of-source-newline": null,
                "no-empty-source":null,
                "indentation": null,
                "no-missing-end-of-source-newline": null,
                "at-rule-empty-line-before": null,
                "selector-list-comma-newline-after": null,
                "rule-empty-line-before": null,
                "string-quotes": null,
                "at-rule-empty-line-before": "never",
            }
        }
    ]
};