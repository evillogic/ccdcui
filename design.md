


The high level design is as follows:

1. UI interacts with the ccdc-server
2. server talks to the opensearch and mongodb
3. pech submits results to DBs, autoscales via keda
4. keda and pech run on k3s
5. users submit jobs through ui -> server -> rabbitmq
6. Agents use webhooks to send data back to server
7. Tools return data back to ui through server

The UI should have the following tabs to give users information

Teams
Services
Scoreboard
Report

Team -> Host -> Service

Each team page should also know all the passwords we have collected for that team

The UI should have the following abilities

Deploy payloads on all hosts
* this has preset payload selection or custom shell command
* this has a windows/linux selection
* this has a delivery method
* this allows generation of unique scripts that know what team they were deployed to

The user experience for this need to be that a user can easily run a payload on all hosts
The UI needs to log which hosts it was successful for

Run attack against all hosts
* This allows for bash scripts or python scripts
* This returns the results for each host it is run against
* This has a job name and id
* This injects variables that make it easy to write the script
* This can export the full script to run manually

Scheduled jobs
* This page allows attacks or payloads to run on a cron schedule

Notes
* This is just obsidian, folders and markdown notes

Each page should also have markdown notes attached to it
There should be a web ssh you can do from the host page
Each host/service should show if it is online