


The high level design is as follows:

1. UI interacts with the ccdc-server
2. server talks to the opensearch and mongodb
3. pech submits results to DBs, autoscales via keda
4. keda and pech run on k3s
5. users submit jobs through ui -> server -> rabbitmq
6. Agents use webhooks to send data back to server
7. Tools return data back to ui through server

The UI should have the following tabs:

1. 