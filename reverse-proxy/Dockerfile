FROM nginx:alpine

#!/bin/sh

COPY nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
# RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
# COPY --from=builder /usr/reactui/dist /usr/share/nginx/html

EXPOSE 3000 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]