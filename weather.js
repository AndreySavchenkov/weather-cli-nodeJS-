#!/usr/bin/env node

import {getArgs} from "./helprers/args.js";

const initCli = () => {
    const args = getArgs(process.argv);
    console.log(args);
    if(arg.h) {
        //enter help
    }
    if(arg.c) {
        //save city
    }
    if(arg.t) {
        //save token
    }
}

initCli();