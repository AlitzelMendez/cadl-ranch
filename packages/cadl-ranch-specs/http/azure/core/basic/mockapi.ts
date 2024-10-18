import { passOnSuccess, json } from "@azure-tools/cadl-ranch-api";
import { ScenarioMockApi } from "@azure-tools/cadl-ranch-api";

export const Scenarios: Record<string, ScenarioMockApi> = {};
const validUser = { id: 1, name: "Madge", etag: "11bdc430-65e8-45ad-81d9-8ffa60d55b59" };
const validUser2 = { id: 2, name: "John", etag: "22bdc430-65e8-45ad-81d9-8ffa60d55b59" };
Scenarios.Azure_Core_Basic_createOrUpdate = passOnSuccess({
  uri: "/azure/core/basic/users/:id",
  method: "patch",
  request: {
    params: {
      "id": "1",
      "api-version": "2022-12-01-preview",
    },
    headers: {
      "Content-Type": "application/merge-patch+json",
    },
    body: { name: "Madge" },
  },
  response: { status: 200, body: json(validUser) },
  kind: "MockApiDefinition",
});

Scenarios.Azure_Core_Basic_createOrReplace = passOnSuccess({
  uri: "/azure/core/basic/users/:id",
  method: "put",
  request: {
    params: {
      "id": "1",
      "api-version": "2022-12-01-preview",
    },
    body: { name: "Madge" },
  },
  response: { status: 200, body: json(validUser) },
  kind: "MockApiDefinition",
});

Scenarios.Azure_Core_Basic_get = passOnSuccess({
  uri: "/azure/core/basic/users/:id",
  method: "get",
  request: {
    params: {
      "id": "1",
      "api-version": "2022-12-01-preview",
    },
  },
  response: { status: 200, body: json(validUser) },
  kind: "MockApiDefinition",
});
const responseBody = {
  value: [
    {
      id: 1,
      name: "Madge",
      etag: "11bdc430-65e8-45ad-81d9-8ffa60d55b59",
      orders: [{ id: 1, userId: 1, detail: "a recorder" }],
    },
    {
      id: 2,
      name: "John",
      etag: "11bdc430-65e8-45ad-81d9-8ffa60d55b5a",
      orders: [{ id: 2, userId: 2, detail: "a TV" }],
    },
  ],
};
Scenarios.Azure_Core_Basic_list = passOnSuccess({
  uri: "/azure/core/basic/users",
  method: "get",
  request: {
    params: {
      "api-version": "2022-12-01-preview",
      "top": 5,
      "skip": 10,
      "orderby": "id",
      "filter": "id lt 10",
      "select": ["id", "orders", "etag"],
      "expand": "orders",
    },
  },
  response: { status: 200, body: json(responseBody) },
  kind: "MockApiDefinition",
});

Scenarios.Azure_Core_Basic_delete = passOnSuccess({
  uri: "/azure/core/basic/users/:id",
  method: "delete",
  request: {
    params: {
      "id": "1",
      "api-version": "2022-12-01-preview",
    },
  },
  response: {
    status: 204,
  },
  kind: "MockApiDefinition",
});

Scenarios.Azure_Core_Basic_export = passOnSuccess({
  uri: "/azure/core/basic/users/:id[:]export",
  method: "post",
  request: {
    params: {
      "id": "1",
      "format": "json",
      "api-version": "2022-12-01-preview",
    },
  },
  response: {
    status: 200,
    body: json(validUser),
  },
  kind: "MockApiDefinition",
});

const expectBody = { users: [validUser, validUser2] };
Scenarios.Azure_Core_Basic_exportAllUsers = passOnSuccess({
  uri: "/azure/core/basic/users:exportallusers",
  method: "post",
  request: {
    params: {
      "format": "json",
      "api-version": "2022-12-01-preview",
    },
  },
  response: { status: 200, body: json(expectBody) },
  kind: "MockApiDefinition",
});
