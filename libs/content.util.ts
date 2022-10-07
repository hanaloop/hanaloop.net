import { ContentTreeItem } from "./content.types";
import MenuItem from "./MenuItem";

/**
 * Generates Hierarchical Menu structure from contentTree 
 * @param contentRoot 
 * @returns 
 */
export function contentTreeToMenu(contentRoot: ContentTreeItem): MenuItem {

    let subItems: MenuItem[] = [];

    if (contentRoot.contents) {
        for (const child of contentRoot.contents) {
            if (child._type === "folder" || child._type === "item" ) {
                subItems.push(contentTreeToMenu(child));
            }
        }
    }

    const slugLeaf = (contentRoot.slug.lastIndexOf("/") > 0) 
        ? contentRoot.slug.substring(contentRoot.slug.lastIndexOf("/")+1): contentRoot.slug;
    
    const menuItem: MenuItem = {
        label: contentRoot.meta?.label || contentRoot.meta?.title || slugLeaf,
        link: contentRoot.slug,
        subItems: subItems.length > 0 ? subItems: null
    }; 

    return menuItem;
}
