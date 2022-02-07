export function getDropdownItems(items: []): any {
    let results: any = [];
    if (items && items.length !== 0) {
        results = items
            .map((item: any) => {
                const dropdownItem = {
                    type: 'option-inline',
                    text: item.text,
                    value: item.value,
                };
                return dropdownItem;
            })
            .sort((a: any, b: any) => {
                if (a.text && b.text) {
                    return a.text.toLowerCase() > b.text.toLowerCase() ? 1 : -1;
                } else if (!a.text) {
                    return b;
                } else if (!b.text) {
                    return a;
                }
                return 0;
            });
    }

    return results;
}
