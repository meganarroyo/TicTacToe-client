curl "https://tic-tac-toe-api-development.herokuapp.com/change-password" \
--include \
--request POST \
--header "Content-type: application/json" \
--data '{
  "passwords": {
    "old_password": "'"${OLDPS}"'"
    "password: "'"${NEWPS}"'"
    "password_confirmation: "'"${NEWPS}"'"
  }
}'

echo
