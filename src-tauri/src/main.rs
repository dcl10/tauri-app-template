#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![increase, decrease])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#[tauri::command]
fn increase(num: i32) -> i32 {
  num + 1
} 

#[tauri::command]
fn decrease(num: i32) -> i32 {
  num - 1
} 
