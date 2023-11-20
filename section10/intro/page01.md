# Graphs

See [Graphs in geeksforgeeks](https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/)

- non-linear, consisting of vertices and edges
- Types: undirected or directed; weighted; cyclic or acyclic...[read more](http://web.cecs.pdx.edu/~sheard/course/Cs163/Doc/Graphs.html)
- terminology: vertex, edge, path, adjacency, ...

## BFS vs DFS

See [this](https://www.cse.unsw.edu.au/~cs2521/18s2/lecs/week05b/slide006.html)

- DFS, Depth-first search: searching branch by branch, typically using recursion
- BFS, Breadth-First Search: searching level by level, level-order traversal, typically using stack and queues

## Visited or Not

Because Graphs can contain cycles, we need to keep track of visited vertices to avoid infinite loops.

## isonnected or Not

Graphs can have unconnected groups of vertices. Visiting all the nodes, we should consider unreachable vertices.
