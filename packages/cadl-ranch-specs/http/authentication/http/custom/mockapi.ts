import { json, passOnSuccess, passOnCode } from "@azure-tools/cadl-ranch-api";
import { ScenarioMockApi } from "@azure-tools/cadl-ranch-api";

export const Scenarios: Record<string, ScenarioMockApi> = {};

Scenarios.Authentication_Http_Custom_valid = passOnSuccess({
  uri: `/authentication/http/custom/valid`,
  method: "get",
  request: {
    headers: {
      authorization: "SharedAccessKey valid-key",
    },
  },
  response: {
    status: 204,
  },
  kind: "MockApiDefinition",
});

Scenarios.Authentication_Http_Custom_invalid = passOnCode(403, {
  uri: `/authentication/http/custom/invalid`,
  method: "get",
  request: {
    headers: {
      authorization: "SharedAccessKey invalid-key",
    },
    status: 403,
  },
  response: {
    status: 403,
    body: json({
      error: "invalid-api-key",
    }),
  },
  kind: "MockApiDefinition",
});
