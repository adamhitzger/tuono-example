use tuono_lib::Request;
use tuono_lib::axum::http::StatusCode;
use serde::Deserialize;

#[derive(Deserialize)]
struct Data{
    name: String
}

#[tuono_lib::api(GET)]
pub async fn health_check(_req: Request) -> StatusCode{
    let name = _req.form_data::<Data>().unwrap();
    print!("{}", name.name);
    StatusCode::OK
}
