/* tslint:disable */
/* eslint-disable */
/**
 * typescript API
 * typescript-api
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface Category
 */
export interface Category {
    /**
     * 
     * @type {number}
     * @memberof Category
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof Category
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Category
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof Category
     */
    updatedAt?: string;
}
/**
 * 
 * @export
 * @interface Topic
 */
export interface Topic {
    /**
     * 
     * @type {number}
     * @memberof Topic
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof Topic
     */
    userId: number;
    /**
     * 
     * @type {string}
     * @memberof Topic
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof Topic
     */
    content: string;
    /**
     * 
     * @type {string}
     * @memberof Topic
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof Topic
     */
    updatedAt?: string;
    /**
     * 
     * @type {Array<Category>}
     * @memberof Topic
     */
    categories?: Array<Category>;
}
/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {number}
     * @memberof User
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    updatedAt?: string;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * get topic
         * @param {number} id id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTopic: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getTopic', 'id', id)
            const localVarPath = `/topics/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * get topics
         * @param {'ASC' | 'DESC'} order order
         * @param {number} limit limit
         * @param {number} offset offset
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTopics: async (order: 'ASC' | 'DESC', limit: number, offset: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'order' is not null or undefined
            assertParamExists('getTopics', 'order', order)
            // verify required parameter 'limit' is not null or undefined
            assertParamExists('getTopics', 'limit', limit)
            // verify required parameter 'offset' is not null or undefined
            assertParamExists('getTopics', 'offset', offset)
            const localVarPath = `/topics`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * get user
         * @param {number} id id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUser: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getUser', 'id', id)
            const localVarPath = `/users/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * get users
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUsers: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * post topic
         * @param {Topic} [topic] create topic
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postTopic: async (topic?: Topic, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/topics`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(topic, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * post user
         * @param {User} [user] create user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postUser: async (user?: User, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(user, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * put topic
         * @param {number} id id
         * @param {Topic} [topic] create topic
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putTopic: async (id: number, topic?: Topic, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('putTopic', 'id', id)
            const localVarPath = `/topics/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(topic, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * put user
         * @param {number} id id
         * @param {User} [user] create user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putUser: async (id: number, user?: User, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('putUser', 'id', id)
            const localVarPath = `/users/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(user, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * get topic
         * @param {number} id id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTopic(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Topic>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTopic(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * get topics
         * @param {'ASC' | 'DESC'} order order
         * @param {number} limit limit
         * @param {number} offset offset
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTopics(order: 'ASC' | 'DESC', limit: number, offset: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Topic>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTopics(order, limit, offset, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * get user
         * @param {number} id id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUser(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUser(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * get users
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUsers(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUsers(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * post topic
         * @param {Topic} [topic] create topic
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postTopic(topic?: Topic, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Topic>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postTopic(topic, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * post user
         * @param {User} [user] create user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postUser(user?: User, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postUser(user, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * put topic
         * @param {number} id id
         * @param {Topic} [topic] create topic
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async putTopic(id: number, topic?: Topic, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Topic>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.putTopic(id, topic, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * put user
         * @param {number} id id
         * @param {User} [user] create user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async putUser(id: number, user?: User, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.putUser(id, user, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * get topic
         * @param {number} id id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTopic(id: number, options?: any): AxiosPromise<Topic> {
            return localVarFp.getTopic(id, options).then((request) => request(axios, basePath));
        },
        /**
         * get topics
         * @param {'ASC' | 'DESC'} order order
         * @param {number} limit limit
         * @param {number} offset offset
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTopics(order: 'ASC' | 'DESC', limit: number, offset: number, options?: any): AxiosPromise<Array<Topic>> {
            return localVarFp.getTopics(order, limit, offset, options).then((request) => request(axios, basePath));
        },
        /**
         * get user
         * @param {number} id id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUser(id: number, options?: any): AxiosPromise<User> {
            return localVarFp.getUser(id, options).then((request) => request(axios, basePath));
        },
        /**
         * get users
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUsers(options?: any): AxiosPromise<User> {
            return localVarFp.getUsers(options).then((request) => request(axios, basePath));
        },
        /**
         * post topic
         * @param {Topic} [topic] create topic
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postTopic(topic?: Topic, options?: any): AxiosPromise<Topic> {
            return localVarFp.postTopic(topic, options).then((request) => request(axios, basePath));
        },
        /**
         * post user
         * @param {User} [user] create user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postUser(user?: User, options?: any): AxiosPromise<User> {
            return localVarFp.postUser(user, options).then((request) => request(axios, basePath));
        },
        /**
         * put topic
         * @param {number} id id
         * @param {Topic} [topic] create topic
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putTopic(id: number, topic?: Topic, options?: any): AxiosPromise<Topic> {
            return localVarFp.putTopic(id, topic, options).then((request) => request(axios, basePath));
        },
        /**
         * put user
         * @param {number} id id
         * @param {User} [user] create user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putUser(id: number, user?: User, options?: any): AxiosPromise<User> {
            return localVarFp.putUser(id, user, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * get topic
     * @param {number} id id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getTopic(id: number, options?: any) {
        return DefaultApiFp(this.configuration).getTopic(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * get topics
     * @param {'ASC' | 'DESC'} order order
     * @param {number} limit limit
     * @param {number} offset offset
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getTopics(order: 'ASC' | 'DESC', limit: number, offset: number, options?: any) {
        return DefaultApiFp(this.configuration).getTopics(order, limit, offset, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * get user
     * @param {number} id id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getUser(id: number, options?: any) {
        return DefaultApiFp(this.configuration).getUser(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * get users
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getUsers(options?: any) {
        return DefaultApiFp(this.configuration).getUsers(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * post topic
     * @param {Topic} [topic] create topic
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public postTopic(topic?: Topic, options?: any) {
        return DefaultApiFp(this.configuration).postTopic(topic, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * post user
     * @param {User} [user] create user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public postUser(user?: User, options?: any) {
        return DefaultApiFp(this.configuration).postUser(user, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * put topic
     * @param {number} id id
     * @param {Topic} [topic] create topic
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public putTopic(id: number, topic?: Topic, options?: any) {
        return DefaultApiFp(this.configuration).putTopic(id, topic, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * put user
     * @param {number} id id
     * @param {User} [user] create user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public putUser(id: number, user?: User, options?: any) {
        return DefaultApiFp(this.configuration).putUser(id, user, options).then((request) => request(this.axios, this.basePath));
    }
}


