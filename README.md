# ipp5-adlibitum-router

~~~~~ sh
npm install e53e04ac/ipp5-adlibitum-router
~~~~~

~~~~~ mjs
import { Ipp5AdlibitumRouter } from 'e53e04ac/ipp5-adlibitum-router';
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
  click B_0 "https://github.com/e53e04ac/event-emitter/tree/684f3b21090807e48917ae6591611f4eb2b1e661";
  click B_1 "https://www.npmjs.org/package/express/v/4.18.2";
  click B_2 "https://github.com/e53e04ac/hold/tree/67e5b60f9bb3221f8b200107c13e89a604a93631";
  click B_3 "https://www.npmjs.org/package/@types/express/v/4.17.17";
  click B_4 "https://www.npmjs.org/package/@types/node/v/18.13.0";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-adlibitum-router";
    E_0(["Ipp5AdlibitumRouter"]);
  end;
  M(["index.mjs"])
  subgraph "express";
    I_0_0(["Router"]);
  end;
  subgraph "event-emitter";
    I_1_0(["EventEmitter"]);
  end;
  subgraph "hold";
    I_2_0(["hold"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_2_0;
  E_0 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-adlibitum-router";
    E_0(["Ipp5AdlibitumRouter"]);
    E_1(["Ipp5AdlibitumRouter"]);
  end;
  M(["index.d.ts"])
  subgraph "express";
    I_0_0(["Router"]);
    I_0_1(["RequestHandler"]);
  end;
  subgraph "event-emitter";
    I_1_0(["EventEmitter"]);
  end;
  subgraph "hold";
    I_2_0(["Get"]);
  end;
  M ----> I_0_0;
  M ----> I_0_1;
  M ----> I_1_0;
  M ----> I_2_0;
  E_0 ----> M;
  E_1 ----> M;
~~~~~
