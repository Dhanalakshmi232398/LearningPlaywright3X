<style>
.markdown-preview-view table {
  border-collapse: collapse;
  width: 100%;
}
.markdown-preview-view th,
.markdown-preview-view td {
  border: 1px solid var(--vscode-editor-foreground);
  padding: 6px 10px;
  text-align: left;
  vertical-align: top;
}
.markdown-preview-view th {
  background-color: var(--vscode-editor-inactiveSelectionBackground);
  font-weight: 700;
}
</style>

# Linux Commands for QA, SDET and Performance Engineering

A practical Linux command reference for QA Test Analysts, SDETs, QA Engineers and Performance Engineers.

> Open the Markdown preview with `Ctrl + Shift + V` to see the column lines and borders.

## 1. Command Discovery

| Command | Description |
|---|---|
| `man <command>` | Open the manual page. |
| `<command> --help` | Show command usage and options. |
| `which <command>` | Show the executable selected from `PATH`. |
| `type <command>` | Show whether a command is an alias, builtin or executable. |
| `info <command>` | Open detailed GNU documentation. |
| `whatis <command>` | Show a one-line description. |
| `history` | Show previously executed commands. |
| `date` | Display the system date and time. |
| `clear` | Clear the terminal screen. |
| `reset` | Reset a terminal with display problems. |
| `alias` | List command aliases. |

## 2. Files and Directories

| Command | Description | QA Use |
|---|---|---|
| `pwd` | Print the current directory. | Confirm the test or log location. |
| `ls` | List files and directories. | Inspect test artifacts. |
| `ls -la` | List all files with details, including hidden files. | Check permissions and hidden configuration. |
| `cd <directory>` | Change directory. | Move between test projects and result folders. |
| `cd -` | Return to the previous directory. | Switch to the previous working location. |
| `cd ~` | Go to the home directory. | Return to a known location. |
| `mkdir -p <path>` | Create a directory and missing parent directories. | Create report and artifact folders. |
| `touch <file>` | Create an empty file or update its timestamp. | Create marker files or placeholders. |
| `cp <source> <destination>` | Copy a file. | Preserve test evidence. |
| `cp -r <source> <destination>` | Copy a directory recursively. | Copy a complete result set. |
| `mv <source> <destination>` | Move or rename a file or directory. | Organize reports. |
| `rm <file>` | Remove a file. | Delete a known temporary file. |
| `rm -r <directory>` | Remove a directory recursively. | Clean generated results carefully. |
| `rm -i <file>` | Ask before removing a file. | Perform safer manual cleanup. |
| `ln -s <target> <link>` | Create a symbolic link. | Point tools to a stable report or data path. |
| `file <path>` | Identify a file type. | Check whether an artifact is text, JSON, archive or binary. |
| `stat <path>` | Show file metadata and timestamps. | Verify artifact creation and modification times. |
| `tree` | Display a directory as a tree. | Understand a test project structure. |
| `echo <text>` | Print text or variable values. | Print diagnostic values in scripts. |
| `printf '<format>' <values>` | Print formatted output. | Produce predictable script output. |
| `env` | Display environment variables. | Verify CI and test configuration. |
| `printenv <NAME>` | Display one environment variable. | Check test configuration. |
| `export NAME=value` | Set an environment variable for the current shell. | Configure a test run. |
| `set` | Display shell variables and functions. | Debug shell configuration. |
| `source <file>` | Load variables and commands into the current shell. | Load environment settings. |
| `exit` | Close the current shell or return a status. | End a remote session or script. |

## 3. Reading Files and Logs

| Command | Description | QA Use |
|---|---|---|
| `cat <file>` | Print a complete small file. | Read configuration or result files. |
| `less <file>` | Read a file page by page. | Inspect large logs. |
| `head -n 50 <file>` | Show the first 50 lines. | Check a report header. |
| `tail -n 100 <file>` | Show the last 100 lines. | Review recent failures. |
| `tail -f <log>` | Follow a log as it grows. | Monitor an active test or service. |
| `nl -ba <file>` | Print a file with line numbers. | Reference exact log lines in defects. |
| `wc -l <file>` | Count lines. | Count records or log entries. |
| `wc -w <file>` | Count words. | Quickly measure text output. |
| `sort <file>` | Sort lines. | Prepare data for comparison. |
| `uniq -c <file>` | Count adjacent duplicate lines. | Summarize repeated values. |
| `sort <file> \| uniq -c \| sort -nr` | Count and rank repeated lines. | Find frequent errors or endpoints. |
| `cut -d',' -f1 <file>` | Extract a delimited field. | Read CSV columns in a shell pipeline. |
| `paste <file1> <file2>` | Combine files line by line. | Compare or combine simple datasets. |
| `tr '<old>' '<new>'` | Translate or delete characters. | Normalize simple text output. |
| `diff <file1> <file2>` | Show line differences. | Compare expected and actual output. |
| `tee <file>` | Display output and write it to a file. | Save output while watching it. |
| `sha256sum <file>` | Calculate a SHA-256 checksum. | Verify artifact integrity. |
| `md5sum <file>` | Calculate an MD5 checksum. | Detect changes in non-sensitive artifacts. |
| `cmp <file1> <file2>` | Compare files byte by byte. | Verify exact file equality. |

## 4. Search and Text Processing

| Command | Description | QA Use |
|---|---|---|
| `grep '<text>' <file>` | Find matching lines. | Search failures, IDs or status codes. |
| `grep -i '<text>' <file>` | Search without case sensitivity. | Find error variations. |
| `grep -n '<text>' <file>` | Include matching line numbers. | Locate a failure precisely. |
| `grep -r '<text>' <directory>` | Search recursively. | Search a project or log folder. |
| `grep -E '<regex>' <file>` | Search using an extended regular expression. | Match multiple patterns. |
| `grep -v '<text>' <file>` | Show lines that do not match. | Exclude noisy log entries. |
| `grep -c '<text>' <file>` | Count matching lines. | Count failures or response codes. |
| `rg '<text>' <path>` | Fast recursive search with ripgrep. | Search source code and test artifacts. |
| `find <path> -name '*.log'` | Find files by name pattern. | Locate logs. |
| `find <path> -type f -mtime -1` | Find files modified in the last day. | Identify fresh artifacts. |
| `find <path> -type f -size +100M` | Find files larger than 100 MB. | Find unexpectedly large logs or dumps. |
| `awk '{print $1}' <file>` | Process text by fields. | Extract columns from logs. |
| `awk -F',' '{print $2}' <file>` | Extract a comma-separated field. | Read CSV values. |
| `sed -n '1,20p' <file>` | Print a selected line range. | Read part of a large file. |
| `sed 's/old/new/g' <file>` | Replace text in output. | Normalize data for analysis. |
| `cut -d',' -f1 <file>` | Extract a delimited field. | Read a CSV column. |
| `xargs` | Build command arguments from standard input. | Run a command over search results. |

## 5. Processes and Test Execution

| Command | Description | QA Use |
|---|---|---|
| `ps aux` | Show all processes with owners and resource data. | Find test runners and services. |
| `pgrep -af '<name>'` | Find processes by name and arguments. | Locate browsers, servers or load generators. |
| `top` | Live CPU and memory process view. | Watch system impact during a test. |
| `htop` | Interactive process viewer, if installed. | Investigate processes more easily. |
| `jobs` | List background jobs in the current shell. | Track parallel test commands. |
| `<command> &` | Run a command in the background. | Start a service or long test. |
| `nohup <command> > run.log 2>&1 &` | Run after logout and capture output. | Keep a remote test running. |
| `fg %1` | Bring job 1 to the foreground. | Interact with a paused test. |
| `bg %1` | Resume job 1 in the background. | Continue a suspended process. |
| `Ctrl+C` | Interrupt the foreground process. | Stop a test cleanly when supported. |
| `Ctrl+Z` | Suspend the foreground process. | Temporarily pause a command. |
| `kill <PID>` | Request process termination. | Stop a stuck test process. |
| `kill -9 <PID>` | Force process termination. | Use only as a last resort. |
| `timeout 60s <command>` | Stop a command after a time limit. | Prevent a CI diagnostic from hanging. |
| `watch -n 2 '<command>'` | Repeat a command at an interval. | Watch process counts or disk usage. |
| `time <command>` | Report command duration. | Measure a test command. |
| `nice -n 10 <command>` | Start with lower CPU scheduling priority. | Reduce impact of a background diagnostic. |
| `renice 10 -p <PID>` | Change a running process priority. | Control competing test processes. |

## 6. Permissions and Remote Access

| Command | Description | QA Use |
|---|---|---|
| `whoami` | Show the current user. | Confirm execution identity. |
| `id` | Show user and group IDs. | Diagnose permission differences. |
| `groups` | Show groups for the current user. | Check access to test resources. |
| `sudo <command>` | Run a command with elevated privileges. | Use only when authorized. |
| `chmod u+x <script>` | Make a script executable for its owner. | Run test utilities. |
| `chmod 755 <script>` | Set common executable permissions. | Share an executable script. |
| `chown <user>:<group> <path>` | Change file owner and group. | Correct artifact ownership when authorized. |
| `umask` | Show or set the default permission mask. | Check permissions of new reports and logs. |
| `ssh user@host` | Connect securely to a remote host. | Inspect environments or run tests remotely. |
| `ssh -p <port> user@host` | Connect using a custom SSH port. | Access a secured test server. |
| `ssh-keygen` | Create an SSH key pair. | Set up key-based CI or server access. |
| `scp <file> user@host:<path>` | Copy files over SSH. | Upload scripts or download evidence. |
| `rsync -av <source> user@host:<path>` | Synchronize directories efficiently. | Transfer large result sets. |
| `sftp user@host` | Transfer files interactively over SSH. | Move test artifacts securely. |

## 7. Disk, Memory and Operating-System Health

| Command | Description | Performance Use |
|---|---|---|
| `df -h` | Show free disk space in readable units. | Detect disk pressure during load tests. |
| `du -sh <path>` | Show total size of a path. | Measure logs and test data. |
| `du -ah <path> \| sort -h` | List files by size. | Find disk-heavy artifacts. |
| `free -h` | Show memory and swap usage. | Check memory before a test. |
| `vmstat 1 10` | Report CPU, memory, paging and processes. | Capture a performance snapshot. |
| `uptime` | Show uptime and load averages. | Check host health. |
| `lsblk` | List block devices. | Inspect disks in a test environment. |
| `mount` | Show mounted filesystems. | Confirm test-data or shared-storage mounts. |
| `iostat -xz 1` | Show CPU and disk I/O statistics. | Identify I/O bottlenecks. |
| `sar -n DEV 1 5` | Show network statistics. | Observe throughput and errors. |
| `dmesg` | Show kernel messages. | Investigate memory or I/O warnings. |
| `uname -a` | Show kernel and system information. | Record the test host platform. |
| `cat /etc/os-release` | Show Linux distribution details. | Record environment versions. |
| `ulimit -a` | Show process resource limits. | Check open-file and process limits. |
| `lsof <path>` | Show processes using a file or filesystem. | Find a process holding a log. |

## 8. Networking and API Diagnostics

| Command | Description | QA Use |
|---|---|---|
| `ip addr` | Show interfaces and IP addresses. | Confirm network configuration. |
| `ip route` | Show the routing table. | Diagnose unreachable environments. |
| `hostname` | Show the machine name. | Record the host used for a test. |
| `hostname -I` | Show host IP addresses. | Identify the test machine address. |
| `ping -c 4 <host>` | Send four ICMP requests. | Check basic reachability. |
| `curl -I <url>` | Fetch response headers only. | Check HTTP status and redirects. |
| `curl -v <url>` | Show verbose HTTP, TCP and TLS details. | Diagnose API and certificate behavior. |
| `curl -sS -o response.json -w '%{http_code} %{time_total}\n' <url>` | Save response and print status plus duration. | Measure an API request quickly. |
| `curl -X POST -H 'Content-Type: application/json' -d @body.json <url>` | Send a JSON POST request from a file. | Smoke-test an API. |
| `wget <url>` | Download a resource. | Retrieve test data or a health endpoint. |
| `dig <host>` | Query DNS records. | Diagnose name resolution. |
| `nslookup <host>` | Query DNS interactively. | Perform simple DNS troubleshooting. |
| `ss -tulpen` | Show listening and active sockets. | Verify services and ports. |
| `nc -vz <host> <port>` | Test whether a TCP port is reachable. | Check service availability. |
| `traceroute <host>` | Show network hops. | Investigate route and latency issues. |
| `mtr <host>` | Combine ping and route analysis. | Investigate intermittent network loss. |
| `openssl s_client -connect <host>:443` | Inspect a TLS connection. | Diagnose certificates and protocols. |
| `tcpdump -i <interface> -nn port <port>` | Capture packets. | Perform authorized network troubleshooting. |

## 9. JSON, XML and API Results

| Command | Description | QA Use |
|---|---|---|
| `jq . response.json` | Pretty-print JSON. | Read an API response. |
| `jq '.users[] | .id' response.json` | Extract values from JSON. | Validate IDs and fields. |
| `jq -e '.status == "success"' response.json` | Return success only when a condition is true. | Turn an API assertion into a CI check. |
| `jq 'length' response.json` | Count array items or object keys. | Validate result counts. |
| `jq -r '.token' response.json` | Print a raw string value. | Pass a response value to another command. |
| `xmllint --format response.xml` | Pretty-print XML. | Inspect XML responses. |
| `xmllint --xpath 'string(//status)' response.xml` | Extract a value using XPath. | Validate XML fields. |
| `base64 <file>` | Encode data as Base64. | Prepare controlled payloads. |
| `base64 -d <file>` | Decode Base64 data. | Inspect encoded evidence. |

## 10. Archives and Test Artifacts

| Command | Description | QA Use |
|---|---|---|
| `tar -czf results.tar.gz results/` | Create a gzip-compressed tar archive. | Package reports and evidence. |
| `tar -xzf results.tar.gz` | Extract a gzip tar archive. | Open downloaded test results. |
| `tar -tf results.tar.gz` | List archive contents without extracting. | Verify an artifact safely. |
| `zip -r results.zip results/` | Create a ZIP archive. | Share reports with desktop tooling. |
| `unzip -l results.zip` | List ZIP contents. | Inspect an archive before extraction. |
| `unzip results.zip -d results` | Extract a ZIP archive. | Restore test evidence. |
| `gzip <file>` | Compress a file. | Compress large logs. |
| `gunzip <file>.gz` | Decompress a gzip file. | Read compressed logs. |
| `xz <file>` | Compress using xz. | Store large long-term performance logs. |
| `xz -d <file>.xz` | Decompress an xz file. | Restore archived data. |

## 11. Git and Test Repositories

| Command | Description | QA Use |
|---|---|---|
| `git status` | Show changed and untracked files. | Check test code and artifacts. |
| `git clone <url>` | Copy a repository locally. | Obtain automation code. |
| `git branch` | List local branches. | Confirm the test branch. |
| `git switch <branch>` | Change branches. | Test a target branch. |
| `git pull --ff-only` | Update without an automatic merge commit. | Keep test code current. |
| `git log --oneline -n 10` | Show recent commits briefly. | Identify the tested revision. |
| `git diff` | Show unstaged changes. | Review test modifications. |
| `git diff --check` | Detect whitespace errors. | Catch simple repository defects. |
| `git show <commit>` | Display a commit and its changes. | Understand a change under test. |
| `git grep '<text>'` | Search tracked repository files. | Find test tags and endpoints. |
| `git stash push -m '<message>'` | Temporarily store local changes. | Switch branches without losing work. |
| `git restore <file>` | Restore a file from the working tree state. | Carefully discard local edits. |

## 12. Test Runner Commands

| Command | Description | QA Use |
|---|---|---|
| `npm ci` | Install exact lockfile dependencies. | Reproducible CI installation. |
| `npm install` | Install Node.js dependencies. | Prepare a JavaScript test project. |
| `npm test` | Run the project's test script. | Execute the standard suite. |
| `npm run <script>` | Run a named npm script. | Run smoke, regression or report tasks. |
| `npx playwright test` | Run Playwright tests. | Execute browser automation. |
| `npx playwright test --headed` | Run Playwright with visible browsers. | Debug a UI test. |
| `npx playwright show-report` | Open the Playwright HTML report. | Review test evidence. |
| `mvn test` | Run Maven tests. | Execute Java automation tests. |
| `mvn -Dtest=ClassName test` | Run a selected Maven test class. | Debug a narrow Java test slice. |
| `gradle test` | Run Gradle tests. | Execute JVM-based automation. |
| `pytest` | Run Python tests. | Execute Python API or UI tests. |
| `pytest -q` | Run Python tests with shorter output. | Keep CI logs readable. |
| `pytest -k '<expression>'` | Run matching Python tests. | Run a focused scenario set. |
| `go test ./...` | Run all Go package tests. | Execute Go service checks. |
| `dotnet test` | Run .NET tests. | Execute C# automation tests. |

## 13. Performance Engineering

| Command | Description | Performance Use |
|---|---|---|
| `/usr/bin/time -v <command>` | Show detailed execution statistics. | Capture memory and context switches. |
| `top -H -p <PID>` | Show threads for one process. | Find thread-level CPU hotspots. |
| `pidstat -p <PID> 1` | Report process CPU, memory and I/O. | Monitor a service during load. |
| `mpstat -P ALL 1` | Show per-CPU utilization. | Detect CPU imbalance. |
| `iostat -xz 1` | Show detailed disk utilization. | Detect storage latency or saturation. |
| `vmstat 1` | Continuously show system activity. | Monitor memory pressure and run queue. |
| `sar -q 1 5` | Show load and run-queue history. | Capture repeatable host observations. |
| `free -m` | Show memory in MB. | Record memory headroom. |
| `perf stat <command>` | Collect hardware performance counters. | Compare cycles and instructions. |
| `strace -c <command>` | Summarize system calls. | Investigate system-call overhead. |
| `watch -n 1 'ss -s'` | Repeat a socket summary. | Watch connection growth. |
| `sar -n TCP,ETCP 1 5` | Show TCP activity and errors. | Investigate retransmissions and connection pressure. |
| `lsof -i :8080` | Show processes using port 8080. | Identify the service under test. |

Record the command, host, timestamp, workload, software version and monitoring interval with every performance result.

## 14. Automation and Reliable Shell Scripts

| Command or Syntax | Description | QA Use |
|---|---|---|
| `bash script.sh` | Run a Bash script. | Execute repeatable setup or analysis. |
| `bash -n script.sh` | Check Bash syntax without executing. | Validate a script before CI. |
| `shellcheck script.sh` | Static-check a shell script. | Find quoting and portability defects. |
| `command1 && command2` | Run command 2 only after command 1 succeeds. | Chain setup and test execution safely. |
| `command1 \| command2` | Send output from one command to another. | Build log-analysis pipelines. |
| `command > file` | Redirect output and replace the file. | Save test output. |
| `command >> file` | Append output to a file. | Keep a run history. |
| `command 2>&1` | Combine errors with standard output. | Capture complete CI logs. |
| `$(command)` | Substitute command output. | Add host or timestamp data to reports. |
| `$?` | Read the previous command's exit status. | Validate command success in scripts. |
| `set -euo pipefail` | Enable common strict Bash behavior. | Make CI scripts fail reliably. |

A useful script header:

```bash
#!/usr/bin/env bash
set -euo pipefail
```

## 15. Scheduling and Automation

| Command | Description | QA Use |
|---|---|---|
| `crontab -l` | List the current user's scheduled jobs. | Check scheduled test or cleanup jobs. |
| `crontab -e` | Edit scheduled jobs. | Schedule a controlled recurring check. |
| `at 'now + 10 minutes'` | Schedule a one-time command, if installed. | Start a test at a controlled time. |
| `watch -n 5 '<command>'` | Repeat a command every five seconds. | Monitor an environment manually. |

## 16. Environment and Service Management

| Command | Description | QA Use |
|---|---|---|
| `systemctl status <service>` | Show service status. | Verify an application dependency. |
| `systemctl start <service>` | Start a service. | Start a permitted local dependency. |
| `systemctl stop <service>` | Stop a service. | Stop a permitted test dependency. |
| `systemctl restart <service>` | Restart a service. | Apply controlled configuration changes. |
| `journalctl -u <service>` | Show service logs. | Investigate startup and runtime failures. |
| `journalctl -u <service> -f` | Follow service logs. | Monitor a service while testing. |
| `service <service> status` | Show legacy service status. | Use on older Linux distributions. |
| `locale` | Show locale settings. | Diagnose encoding and date-format differences. |
| `locale charmap` | Show the active character encoding. | Diagnose test-data encoding issues. |

## 17. Useful QA One-Liners

| Command | Description | QA Use |
|---|---|---|
| `find . -name '*.log' -type f -exec grep -iHc 'error\|exception\|failed' {} +` | Count error-like messages in log files. | Identify logs containing failures. |
| `find . -type f -printf '%T@ %p\n' \| sort -nr \| head -20` | Show the 20 newest files. | Find fresh test artifacts. |
| `curl -fsS "$BASE_URL/health" \| jq -e '.status == "UP"'` | Call a health endpoint and assert its JSON status. | Create a CI smoke check. |
| `ss -ltnp \| grep -E ':3000|:8080|:9090|:5432'` | Show processes on common test ports. | Check local services. |
| `tar -czf "test-results-$(date +%Y%m%d-%H%M%S).tar.gz" test-results/` | Create a timestamped report archive. | Package unique test evidence. |
| `awk '{print $9}' access.log \| sort \| uniq -c \| sort -nr` | Count HTTP status codes. | Find frequent response codes. |
| `tail -f application.log \| grep --line-buffered -Ei 'warn|error|exception|failed'` | Follow a log and show warnings or errors. | Monitor failures during a test. |

## 18. Role-Based Learning Path

| Role | Learn These First | Main Goal |
|---|---|---|
| QA Test Analyst | `pwd`, `ls -la`, `cat`, `less`, `grep`, `find`, `tail -f`, `curl`, `diff`, `tar`, `git status` | Inspect environments, logs, API responses and evidence. |
| SDET / QA Automation Engineer | `grep`, `find`, `awk`, `sed`, pipes, redirection, `jq`, `npm ci`, Playwright, Pytest, Maven, `bash -n`, `shellcheck` | Run, debug and automate repeatable test suites. |
| Performance Engineer | `top`, `vmstat`, `iostat`, `sar`, `pidstat`, `mpstat`, `ss`, `lsof`, `free`, `df`, `du`, `time`, `perf` | Measure resources, bottlenecks and workload impact. |
| QA Lead / Test Engineer | `git`, `ssh`, `scp`, `rsync`, `systemctl`, `journalctl`, `curl`, `jq`, `tar`, exit statuses and shell scripts | Control environments and make results reproducible. |

## 19. Safety Rules

| Rule | Reason |
|---|---|
| Use `pwd` and `ls` before destructive operations. | Prevent actions in the wrong directory. |
| Prefer `rm -i` during manual cleanup. | Confirm files before deletion. |
| Never expose passwords, tokens or private keys. | Protect environments and test data. |
| Do not run load tests against production without authorization. | Prevent service disruption. |
| Use synthetic or masked data. | Protect personal and customer information. |
| Record command, host, timestamp, configuration and exit status. | Make results reproducible and auditable. |
| Use `date -u` for distributed test evidence. | Make timestamps comparable across hosts. |

## 20. Practice Checklist

| Practice | Commands |
|---|---|
| Navigate to a test project. | `pwd`, `cd`, `ls -la` |
| Find all log files. | `find` |
| Count failures. | `grep`, `wc` |
| Follow a running log. | `tail -f` |
| Check an API status. | `curl`, `jq` |
| Package test evidence. | `tar` |
| Save timestamped test output. | Redirection, `date` |
| Inspect a performance test. | `top`, `vmstat`, `iostat`, `ss` |
| Write a reliable Bash script. | `set -euo pipefail` |
| Validate the script. | `bash -n`, `shellcheck` |
