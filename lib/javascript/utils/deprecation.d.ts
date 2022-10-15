/**
 * deprecatedClass: creates a subclass of the class, which prints deprecated warning when called
 */
export declare function deprecatedClass<C extends new (...args: any[]) => object>(origClass: C, deprecationMessage: string): C;
/**
 * Copy properties from origObject to newObject, which not exists in newObject,
 * calls onDeprecatedCalled callback in case a copied property is invoked.
 */
export declare function copyPropertiesAsDeprecated<DeprecatedType extends Record<string, unknown>, WithDeprecatedType extends Record<string, unknown>>(origObject: DeprecatedType, newObject: WithDeprecatedType, onDeprecatedCalled: (key: string) => void, accessors?: {
    [key: string]: (value: unknown) => unknown;
}): WithDeprecatedType;
