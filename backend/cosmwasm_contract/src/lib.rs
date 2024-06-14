use cosmwasm_std::{entry_point, DepsMut, Env, MessageInfo, Response, StdResult};
use schemars::JsonSchema;
use serde::{Deserialize, Serialize};

#[entry_point]
pub fn instantiate(
    _deps: DepsMut,
    _env: Env,
    _info: MessageInfo,
    _msg: InstantiateMsg,
) -> StdResult<Response> {
    Ok(Response::default())
}

#[entry_point]
pub fn execute(
    _deps: DepsMut,
    _env: Env,
    _info: MessageInfo,
    _msg: ExecuteMsg,
) -> StdResult<Response> {
    match _msg {
        ExecuteMsg::RegisterIdentity { proof: _proof } => {
            try_register_identity(_deps, _info, _proof)
        }
    }
}

pub fn try_register_identity(
    _deps: DepsMut,
    _info: MessageInfo,
    _proof: String,
) -> StdResult<Response> {
    // Store proof and user info
    Ok(Response::new().add_attribute("method", "register_identity"))
}

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct InstantiateMsg {}

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum ExecuteMsg {
    RegisterIdentity { proof: String },
}
