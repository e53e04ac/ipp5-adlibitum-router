/*!
    @e53e04ac/ipp5-adlibitum-router/index.mjs
    Copyright (C) @e53e04ac
    MIT License
*/

import { Router as ExpressRouter } from 'express';

import { EventEmitter } from 'event-emitter';
import { hold } from 'hold';

/** @type {import('.').Ipp5AdlibitumRouter.Constructor} */
const constructor = ((options) => {

    const _options = ({});

    /** @type {import('.').Ipp5AdlibitumRouter._Self} */
    const _self = ({
        options: (() => {
            return options;
        }),
        _options: (() => {
            return _options;
        }),
        router: hold(() => {
            return { reference: undefined };
        }),
    });

    /** @type {import('.').Ipp5AdlibitumRouter.Self} */
    const self = ({
        ...EventEmitter({}),
        _Ipp5AdlibitumRouter: (() => {
            return _self;
        }),
        expressRequestHandler: hold(() => {
            return ((req, res, next) => {
                const reference = self.getNullable();
                if (reference != null) {
                    reference(req, res, next);
                } else {
                    next();
                }
            });
        }),
        getNullable: (() => {
            return _self.router().reference;
        }),
        setNullable: ((router) => {
            _self.router().reference = router;
        }),
        has: (() => {
            return self.getNullable() != null;
        }),
        get: (() => {
            const router = self.getNullable();
            if (router == null) {
                throw new Error();
            }
            return router;
        }),
        set: ((router) => {
            self.setNullable(router);
        }),
        remove: (() => {
            self.setNullable(undefined);
        }),
        create: (() => {
            return ExpressRouter({});
        }),
        setup: ((callback) => {
            const router = self.create();
            callback(router);
            self.set(router);
        }),
    });

    return self;

});

/** @type {import('.').Ipp5AdlibitumRouter.Companion} */
const companion = ({});

/** @type {import('.').Ipp5AdlibitumRouter.ConstructorWithCompanion} */
const constructorWithCompanion = Object.assign(constructor, companion);

export { constructorWithCompanion as Ipp5AdlibitumRouter };
