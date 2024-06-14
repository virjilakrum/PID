use cosmwasm_std::{entry_point, Binary, DepsMut, Env, MessageInfo, Response, StdResult};

#[entry_point]
pub fn instantiate(
    deps: DepsMut,
    _env: Env,
    _info: MessageInfo,
    _msg: InstantiateMsg,
) -> StdResult<Response> {
    Ok(Response::default())
}

#[entry_point]
pub fn execute(
    deps: DepsMut,
    _env: Env,
    info: MessageInfo,
    msg: ExecuteMsg,
) -> StdResult<Response> {
    match msg {
        ExecuteMsg::RegisterIdentity { proof } => try_register_identity(deps, info, proof),
    }
}

pub fn try_register_identity(
    deps: DepsMut,
    info: MessageInfo,
    proof: String,
) -> StdResult<Response> {

    // storage of user and proof introduction

    Ok(Response::new().add_attribute("method", "register_identity"))
}

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct InstantiateMsg {}

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct ExecuteMsg {
    pub RegisterIdentity: { proof: String },
}
