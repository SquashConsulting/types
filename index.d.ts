declare namespace Squash {
  interface RAW {
    cookies: {
      sid?: string;
    };
  }

  interface SessionStorage extends Foxx.SessionStorage {
    prune: () => void;
    save: (session?: Foxx.Session) => void;
    clear: (session: Foxx.Session) => void;
  }

  interface Request extends Foxx.Request {
    _raw: RAW;
    currentUser?: ArangoDB.Document;
    sessionStorage?: SessionStorage;
  }

  interface Collection {
    [key: string]: string;
  }
}

export = Squash;
