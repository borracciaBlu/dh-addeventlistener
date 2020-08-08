type NodeListLike = NodeList | Node[] | Node | EventTarget;
type CallbackList = Function | Function[];

export declare function generateEventFn(eventType: string) : (itmList: NodeListLike, clbList: CallbackList) => void;

export declare function onFocus(itmList: NodeListLike, clbList: CallbackList) : void;
export declare function onBlur(itmList: NodeListLike, clbList: CallbackList) : void;
export declare function onClick(itmList: NodeListLike, clbList: CallbackList) : void;
export declare function onKeyDown(itmList: NodeListLike, clbList: CallbackList) : void;
export declare function onKeyUp(itmList: NodeListLike, clbList: CallbackList) : void;
export declare function onChange(itmList: NodeListLike, clbList: CallbackList) : void;
