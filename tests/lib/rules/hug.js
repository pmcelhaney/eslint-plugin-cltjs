/**
 * @fileoverview ensures return expressions are loved
 * @author Patrick McElhaney
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/hug"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("hug", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "function foo () { return bar; };",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
