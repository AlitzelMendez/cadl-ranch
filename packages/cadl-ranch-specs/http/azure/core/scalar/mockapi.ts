import { passOnSuccess, json } from "@azure-tools/cadl-ranch-api";
import { ScenarioMockApi } from "@azure-tools/cadl-ranch-api";

export const Scenarios: Record<string, ScenarioMockApi> = {};

// string value
Scenarios.Azure_Core_Scalar_AzureLocationScalar_get = passOnSuccess({
  uri: "/azure/core/scalar/azureLocation",
  method: "get",
  request: {},
  response: { status: 200, body: json("eastus") },
  kind: "MockApiDefinition",
});

Scenarios.Azure_Core_Scalar_AzureLocationScalar_put = passOnSuccess({
  uri: "/azure/core/scalar/azureLocation",
  method: "put",
  request: {
    body: "eastus",
    headers: {
      "Content-Type": "text/plain",
    },
  },
  response: { status: 204 },
  kind: "MockApiDefinition",
});

const azureLocation = { location: "eastus" };
Scenarios.Azure_Core_Scalar_AzureLocationScalar_post = passOnSuccess({
  uri: "/azure/core/scalar/azureLocation",
  method: "post",
  request: { body: azureLocation },
  response: { status: 200, body: json(azureLocation) },
  kind: "MockApiDefinition",
});

Scenarios.Azure_Core_Scalar_AzureLocationScalar_header = passOnSuccess({
  uri: "/azure/core/scalar/azureLocation/header",
  method: "post",
  request: {
    headers: {
      region: "eastus",
    },
  },
  response: { status: 204 },
  kind: "MockApiDefinition",
});

Scenarios.Azure_Core_Scalar_AzureLocationScalar_query = passOnSuccess({
  uri: "/azure/core/scalar/azureLocation/query",
  method: "post",
  request: {
    params: {
      region: "eastus",
    },
  },
  response: { status: 204 },
  kind: "MockApiDefinition",
});
