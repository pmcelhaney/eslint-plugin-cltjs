/**
 * @fileoverview ensures return expressions are loved
 * @author Patrick McElhaney
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "ensures return expressions are loved",
            category: "Fill me in",
            recommended: false
        },
        fixable: "code",  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        function wrapInHug(node) {
          return getText(node)
            .replace(/^return/, 'return(')
            .replace(/(;\w*$|$)/, (m) => ' )' + m);
        }

        function getText(node) {
          return context.getSourceCode().getText(node);
        }

        function isHugged(node) {
          return /^return\(/.test(getText(node));
        }

        function isNotHugged(node) {
          return !isHugged(node);
        }


        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {

            // give me methods
            ReturnStatement: function (node) {

              if (isNotHugged(node)) {
                context.report({
                  node: node,
                  message: 'return statement needs a hug',
                  fix: function (fixer) {
                    return fixer.replaceText(node, wrapInHug(node));
                  }
                })
              }
            }

        };
    }
};
