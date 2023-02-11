# ipp5-adlibitum-router

~~~~~ sh
npm install e53e04ac/ipp5-adlibitum-router
~~~~~

~~~~~ mjs
import { Ipp5AdlibitumRouter } from 'e53e04ac/ipp5-adlibitum-router';
~~~~~

~~~~~ mermaid
graph RL;
  A(["e53e04ac/ipp5-adlibitum-router"]);
  subgraph "dependencies";
    B_0(["e53e04ac/event-emitter"]);
    B_1(["express"]);
    B_2(["e53e04ac/hold"]);
  end;
  subgraph "devDependencies";
    B_3(["@types/express"]);
    B_4(["@types/node"]);
  end;
  A --reference--> B_0;
  A --reference--> B_1;
  A --reference--> B_2;
  A --reference--> B_3;
  A --reference--> B_4;
  click B_0 "https://github.com/e53e04ac/event-emitter/tree/289e6320381f1be4d43177944eca0a12b665c4f7";
  click B_1 "https://www.npmjs.org/package/express/v/4.18.2";
  click B_2 "https://github.com/e53e04ac/hold/tree/2143f5f52192ae4156ea0af80d41c87c55355e9c";
  click B_3 "https://www.npmjs.org/package/@types/express/v/4.17.17";
  click B_4 "https://www.npmjs.org/package/@types/node/v/18.13.0";
~~~~~

~~~~~ mermaid
graph LR;
  subgraph "e53e04ac/ipp5-adlibitum-router"
    C0("index.mjs");
    C1("index.d.ts");
  end;
  subgraph "express"
    D0(["Router"]);
    D3(["RequestHandler"]);
  end;
  subgraph "event-emitter"
    D1(["EventEmitter"]);
  end;
  subgraph "hold"
    D2(["hold"]);
    D4(["Get"]);
  end;
  D0 --import--> C0;
  D1 --import--> C0;
  D2 --import--> C0;
  D0 --import--> C1;
  D3 --import--> C1;
  D1 --import--> C1;
  D4 --import--> C1;
~~~~~
