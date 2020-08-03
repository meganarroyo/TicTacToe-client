curl "https://tic-tac-toe-api-production.herokuapp.com/games/${OVER}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \

  echo
