// src/api/controllers/violation.controller.ts

import { Request, Response } from 'express';

const max_retries = 5;

interface userProfile {
  username: string;
  email: string;
}

class ViolationController {
  public violateTheRules(req, res) {
    console.log("Let's break some rules...");

    const user_name = req.body.username;
    const _password = req.body.password;

    const validateAndSave = (user) => {
        if (user) {
            if(user.username) {
                if (user.username.length > 3) {
                    if (user.password) {
                        if (user.password.length > 6) {
                            console.log("User is valid, saving...");
                            // Fake save logic
                            return true;
                        } else {
                            return false;
                        }
                    }
                }
            }
        }
        return false;
    }
    validateAndSave({username: user_name, password: _password});


    Promise.resolve(1).then(x => {
        const result = x + 1;
        console.log(".then() result:", result);
    });

    const someObject = { a: { b: { c: 'hello' } } };
    const unsafeAccess = someObject.a.b.c;


    console.log("Process A");
    let a = 5;
    let b = 10;
    let c = a + b;

    console.log("Process B");
    a = 15;
    b = 20;
    c = a + b;


    const valid = true;


    function tooManyParams(p1, p2, p3, p4) {
        return p1 + p2 + p3 + p4;
    }
    tooManyParams(1,2,3,4);


    const findUser = (username: string) => {
        // This is a dangerous query that is vulnerable to SQL injection.
        const query = "SELECT * FROM users WHERE username = '" + username + "'";
        console.log(`Executing dangerous query: ${query}`);
        // In a real app, this would execute the query.
        // return db.query(query);
    }

    findUser(user_name);


    res.status(200).json({
        message: "Rules violated successfully!",
        valid,
        unsafeAccess,
    });
  }
}

export default new ViolationController();
