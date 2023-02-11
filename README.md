# ipp5-adlibitum-router

~~~~~ sh
npm install e53e04ac/ipp5-adlibitum-router
~~~~~

~~~~~ mjs
import { Ipp5AdlibitumRouter } from 'e53e04ac/ipp5-adlibitum-router';
~~~~~

~~~~~ mermaid
graph RL;
  A(["package.json"]);
  subgraph "dependencies";
    B_0(["e53e04ac/event-emitter"]);
    B_1(["express"]);
    B_2(["e53e04ac/hold"]);
  end;
  subgraph "devDependencies";
    B_3(["@types/express"]);
    B_4(["@types/node"]);
  end;
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  A ----> B_3;
  A ----> B_4;
  click B_0 "https://github.com/e53e04ac/event-emitter/tree/0c338d821268a5f0aaa42481216fd2e73c8734c9";
  click B_1 "https://www.npmjs.org/package/express/v/4.18.2";
  click B_2 "https://github.com/e53e04ac/hold/tree/285d028e225a7e75747417c3ed6b1ca0d5f52f6a";
  click B_3 "https://www.npmjs.org/package/@types/express/v/4.17.17";
  click B_4 "https://www.npmjs.org/package/@types/node/v/18.13.0";
~~~~~

~~~~~ mermaid
graph LR;
  A(["index.mjs"])
  subgraph "express";
    B_0_0(["Router"]);
  end;
  subgraph "event-emitter";
    B_1_0(["EventEmitter"]);
  end;
  subgraph "hold";
    B_2_0(["hold"]);
  end;
  B_0_0 ----> A;
  B_1_0 ----> A;
  B_2_0 ----> A;
~~~~~

~~~~~ mermaid
graph LR;
  A(["index.d.ts"])
  subgraph "express";
    B_0_0(["Router"]);
    B_0_1(["RequestHandler"]);
  end;
  subgraph "event-emitter";
    B_1_0(["EventEmitter"]);
  end;
  subgraph "hold";
    B_2_0(["Get"]);
  end;
  B_0_0 ----> A;
  B_0_1 ----> A;
  B_1_0 ----> A;
  B_2_0 ----> A;
~~~~~
