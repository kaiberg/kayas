import {Delay} from "@/helpers/helpers";

type createRequest = {
    hits?: number,
    message: string,
    expire: Date,
    createOn?: Date,
    password?: string
}

type createResponse = {
    identifier: string
    error: undefined
}

type readRequest = {
    identifier: string,
    password?: string
}
type readResponse = {
    message?: string,
    error: {}
} | {
    message: string,
    error: undefined
}

const LOCAL_DB : { [key: string]: readResponse} = {
    'one': {
        message: "Secret number one",
        error: undefined
    },
    'two': {
        message: "Secret number two",
        error: undefined
    },
    'three': {
        message: "Secret number three",
        error: undefined
    },
    'four': {
        message: "Secret number four",
        error: undefined
    },
    'five': {
        message: "Secret number five",
        error: undefined
    },
}

async function getSecret({identifier} : readRequest): Promise<readResponse> {

    await Delay(2 * 1000);

    if(LOCAL_DB[identifier] !== undefined) {
        return LOCAL_DB[identifier];
    }

    const ENDPOINT = `/api/read?id=${identifier}`;
    const response = await fetch(ENDPOINT, {
        method: 'GET',
        cache: 'no-store'
    })

    return {
        error: {}
    }
}

async function createSecret(request: createRequest): Promise<createResponse> {
    const ENDPOINT = '/api/create'
    const response = await fetch(ENDPOINT, {
        method: 'POST',
        body: JSON.stringify(request)
    });

    if(response.status < 300) {
        const {identifier} = await response.json();
        return {identifier, error: undefined}
    }

    return {
        identifier: "",
        error: undefined
    }
}

export {getSecret}
export type { readRequest, readResponse }
