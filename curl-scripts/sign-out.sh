curl "https://tic-tac-toe-api-development.herokuapp.com/sign-out" \
--include \
--request DELETE \
--header "Content-type: application/json" \
--header "Authorization: Bearer ${TOKEN}"
  }
}'

echo
