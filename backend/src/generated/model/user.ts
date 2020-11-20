/**
 * Topham Gotham City Endpoints
 * Topham Gotham City
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface User { 
    id: number;
    uuid?: string;
    firebaseUuid: string;
    email: string;
    name: string;
    imageUrl?: string;
    isActive?: boolean;
    isPremium?: boolean;
    userName?: string;
    discription?: string;
    createdAt?: string;
    updatedAt?: string;
}