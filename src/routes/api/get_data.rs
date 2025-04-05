use tuono_lib::{axum::response::Redirect, Request};
use serde::Deserialize;

#[derive(Deserialize)]
struct Data{
    name: String
}

#[tuono_lib::api(POST)]
pub async fn get_data(_req: Request) -> Redirect {
    let name = _req.form_data::<Data>().unwrap();
    print!("{}", name.name);
    Redirect::to("/")
}