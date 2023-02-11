# ipp5-adlibitum-router

~~~~~ sh
npm install e53e04ac/ipp5-adlibitum-router
~~~~~

~~~~~ mjs
import { Ipp5AdlibitumRouter } from 'e53e04ac/ipp5-adlibitum-router';
~~~~~

~~~~~ mermaid
graph LR;
  A(["ipp5-adlibitum-router"]);
  B0(["e53e04ac/event-emitter"]);
  B1(["express"]);
  B2(["e53e04ac/hold"]);
  C0(["@types/express"]);
  C1(["@types/node"]);
  click B0 href "https://github.com/e53e04ac/event-emitter";
  click B2 href "https://github.com/e53e04ac/hold";
  subgraph "e53e04ac/ipp5-adlibitum-router";
    A;
  end;
  subgraph "dependencies";
    B0 --import--> A;
    B1 --import--> A;
    B2 --import--> A;
  end;
  subgraph "devDependencies";
    C0 --import--> A;
    C1 --import--> A;
  end;
~~~~~
