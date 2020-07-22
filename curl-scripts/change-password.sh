curl "https://tic-tac-toe-api-development.herokuapp.com/change-password" \
--include \
--request POST \
--header "Content-type: application/json" \
--data '{
  "passwords": {
    "old_password": "'"${OLDPW}"'"
    "password: "'"${NEWPW}"'"
  }
}'

echo
