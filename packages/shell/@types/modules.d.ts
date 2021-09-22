declare module '*/construct.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const ConstructFields: DocumentNode;
  export const ConstructPartFields: DocumentNode;
  export const Construct: DocumentNode;
  export const ConstructTemplates: DocumentNode;
  export const CreateConstruct: DocumentNode;
  export const UpdateConstruct: DocumentNode;
  export const InsertConstructPart: DocumentNode;

  export default defaultDocument;
}

declare module '*/part.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const PartFields: DocumentNode;
  export const Parts: DocumentNode;

  export default defaultDocument;
}

declare module '*/project.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const FolderFields: DocumentNode;
  export const Folders: DocumentNode;
  export const Folder: DocumentNode;
  export const CreateFolder: DocumentNode;
  export const UpdateFolder: DocumentNode;

  export default defaultDocument;
}
