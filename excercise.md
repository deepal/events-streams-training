# Implementing a simple file sync utility

The goal of this excercise is to understand Event Emitter and Streams.

### Task: 
Implement a simple tool which syncs files between two directories (from `source` to `destination`). Whenever a new file is added to the `source` directory, it needs to be synced to the `destination` directory with the same file name. Your program should continuously watch the `source` directory and sync any new files to `destination` until you close the program (e.g, ctrl+c).

We will be using a popular npm module called [`chokidar`](https://www.npmjs.com/package/chokidar) to watch `source` directory for changes, and will be using `fs` streams for syncing files. (do not use `fs.copyFile`)

> There's a built-in `fs.watch` function in NodeJS as well, but it's not reliable due to the facts mentioned in the `chokidar` documentation.

### Out of scope:
- Your program needs to sync only new files in the `source` directory to `destination` directory. You can ignore any changes/renaming/deletion of existing files in the source directory. 
- Syncing is only unidirectional. You don't need to sync from `destination` to `source`.

### Hints:

- You can use `chokidar.watch` function which returns an EventEmitter instance. Whenever a new file is added to `source` directory, this event emitter instance will emit `add` with new file name as the event payload.

### Next Steps:

- How can we sync changes to existing files?
- How can we sync file renames?
- How can we sync file deletions?
- **Challenge for Code Ninjas**: How can implement a bi-directional sync (and avoid infinite loops)?
