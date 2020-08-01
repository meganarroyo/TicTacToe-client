curl "https://tic-tac-toe-api-development.herokuapp.com" \
--include \
--request POST \
--header "Content-type: application/json" \
--data '{
  "credentials": {
    "email": "'"${EMAIL}"'"
    "password: "'"${PASSWORD}"'"
    "password_confirmation: "'"${PASSWORD}"'"
  }
}'

echo
