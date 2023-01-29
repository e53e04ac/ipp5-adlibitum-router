/*!
    @e53e04ac/ipp5-adlibitum-router/index.d.ts
    Copyright (C) @e53e04ac
    MIT License
*/

import { Router as ExpressRouter } from 'express';
import { RequestHandler as ExpressRequestHandler } from 'express';

import { EventEmitter } from 'event-emitter';
import { Get } from 'hold';

export declare namespace Ipp5AdlibitumRouter {

    type EventSpecs = Record<never, never>;

    type Options = Record<never, never>;

    type _Self = {
        readonly options: Get<Options>;
        readonly _options: Get<unknown>;
        readonly router: Get<{
            reference: undefined | ExpressRouter;
        }>;
    };

    type Self = EventEmitter<EventSpecs> & {
        readonly _Ipp5AdlibitumRouter: Get<_Self>;
        readonly expressRequestHandler: Get<ExpressRequestHandler>;
        readonly getNullable: {
            (): undefined | ExpressRouter;
        };
        readonly setNullable: {
            (reference: undefined | ExpressRouter): void;
        };
        readonly has: {
            (): boolean;
        };
        readonly get: {
            (): ExpressRouter;
        };
        readonly set: {
            (reference: ExpressRouter): void;
        };
        readonly remove: {
            (): void;
        };
        readonly create: {
            (): ExpressRouter;
        };
        readonly setup: {
            (callback: {
                (router: ExpressRouter): void;
            }): void;
        };
    };

    type Constructor = {
        (options: Options): Self;
    };

    type Companion = Record<never, never>;

    type ConstructorWithCompanion = Constructor & Companion;

}

export declare type Ipp5AdlibitumRouter = Ipp5AdlibitumRouter.Self;

export declare const Ipp5AdlibitumRouter: Ipp5AdlibitumRouter.ConstructorWithCompanion;
