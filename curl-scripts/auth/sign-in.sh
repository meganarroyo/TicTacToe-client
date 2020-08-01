curl "https://tic-tac-toe-api-development.herokuapp.com/sign-in" \
--include \
--request PUSH \
--header "Content-type: application/json" \
--data '{
  "credentials": {
    "email": "'"${EMAIL}"'"
    "password: "'"${PASSWORD}"'"
    }
}'

echo
