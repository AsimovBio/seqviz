declare module '*/construct.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const ConstructFields: DocumentNode;
  export const AnnotationFields: DocumentNode;
  export const ConstructPartFields: DocumentNode;
  export const Construct: DocumentNode;
  export const ConstructTemplates: DocumentNode;
  export const CreateConstruct: DocumentNode;
  export const UpdateConstruct: DocumentNode;
  export const InsertConstructPart: DocumentNode;
  export const InsertAnnotation: DocumentNode;

  export default defaultDocument;
}

declare module '*/folder.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const FolderFields: DocumentNode;
  export const Folders: DocumentNode;
  export const Folder: DocumentNode;
  export const CreateFolder: DocumentNode;
  export const UpdateFolder: DocumentNode;

  export default defaultDocument;
}

declare module '*/part-type.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const PartTypeFields: DocumentNode;
  export const PartTypes: DocumentNode;

  export default defaultDocument;
}

declare module '*/part.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const PartFields: DocumentNode;
  export const Parts: DocumentNode;

  export default defaultDocument;
}
