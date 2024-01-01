import { RxStompConfig } from "@stomp/rx-stomp";

const _wsConfig: RxStompConfig = {
    brokerURL: 'ws://quovad.is/play/room',
    connectHeaders: {},
    heartbeatIncoming: 0,
    heartbeatOutgoing: 20000,
    reconnectDelay: 500,
    debug: (msg: string): void => {
        console.log(new Date(), msg);
    }
}

const _chatConfig: RxStompConfig = {
    brokerURL: 'ws://quovad.is/play/chat',
    connectHeaders: {},
    heartbeatIncoming: 0,
    heartbeatOutgoing: 20000,
    reconnectDelay: 500,
    debug: (msg: string): void => {
        console.log('new chat:', new Date(), msg);
    }
}


export const environment = {
    accountUrl: 'http://quovad.is/account/topic',
    wsConfig: _wsConfig,
    chatConfig: _chatConfig
};