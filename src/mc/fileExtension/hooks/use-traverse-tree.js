const useTraverseTree = () => {

    function insertNode(tree, folderId, item, isFolder) {
        // Edge cases
        // if it's a folder only then insert
        if(tree.id === folderId && tree.isFolder) {
            tree.items.unshift({
                id: new Date().getTime(),
                name: item,
                isFolder,
                 items: []
            });

            return tree;

        }

        // will use depth first search to loop through child to match folderId
        // root -> public return
        // root -> src

        let latestNode = [];
        latestNode = tree.items.map((obj) => {
            return insertNode(obj, folderId, item, isFolder);
        });
        
        // latestNode will returns us an array
        // --** this part will only return the "items" part not the name, isFolder, id part 
        return {...tree, items: latestNode};

    }

    return { insertNode };
}

export default useTraverseTree

// add update, delete functionality.
//  Optimization can be done
