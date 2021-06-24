import { GraphQLClient } from 'graphql-request';
import { gql } from 'graphql-request';
import { ClientError } from 'graphql-request/dist/types';
import * as Dom from 'graphql-request/dist/types.dom';
import useSWR, { ConfigInterface as SWRConfigInterface, keyInterface as SWRKeyInterface } from 'swr';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};


/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "construct" */
export type Construct = {
  __typename?: 'construct';
  /** An array relationship */
  construct_parts: Array<Construct_Part>;
  /** An aggregate relationship */
  construct_parts_aggregate: Construct_Part_Aggregate;
  /** An array relationship */
  construct_projects: Array<Project_Construct>;
  /** An aggregate relationship */
  construct_projects_aggregate: Project_Construct_Aggregate;
  created_at: Scalars['timestamptz'];
  created_by_id?: Maybe<Scalars['Int']>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user?: Maybe<User>;
};


/** columns and relationships of "construct" */
export type ConstructConstruct_PartsArgs = {
  distinct_on?: Maybe<Array<Construct_Part_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Construct_Part_Order_By>>;
  where?: Maybe<Construct_Part_Bool_Exp>;
};


/** columns and relationships of "construct" */
export type ConstructConstruct_Parts_AggregateArgs = {
  distinct_on?: Maybe<Array<Construct_Part_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Construct_Part_Order_By>>;
  where?: Maybe<Construct_Part_Bool_Exp>;
};


/** columns and relationships of "construct" */
export type ConstructConstruct_ProjectsArgs = {
  distinct_on?: Maybe<Array<Project_Construct_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_Construct_Order_By>>;
  where?: Maybe<Project_Construct_Bool_Exp>;
};


/** columns and relationships of "construct" */
export type ConstructConstruct_Projects_AggregateArgs = {
  distinct_on?: Maybe<Array<Project_Construct_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_Construct_Order_By>>;
  where?: Maybe<Project_Construct_Bool_Exp>;
};

/** aggregated selection of "construct" */
export type Construct_Aggregate = {
  __typename?: 'construct_aggregate';
  aggregate?: Maybe<Construct_Aggregate_Fields>;
  nodes: Array<Construct>;
};

/** aggregate fields of "construct" */
export type Construct_Aggregate_Fields = {
  __typename?: 'construct_aggregate_fields';
  avg?: Maybe<Construct_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Construct_Max_Fields>;
  min?: Maybe<Construct_Min_Fields>;
  stddev?: Maybe<Construct_Stddev_Fields>;
  stddev_pop?: Maybe<Construct_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Construct_Stddev_Samp_Fields>;
  sum?: Maybe<Construct_Sum_Fields>;
  var_pop?: Maybe<Construct_Var_Pop_Fields>;
  var_samp?: Maybe<Construct_Var_Samp_Fields>;
  variance?: Maybe<Construct_Variance_Fields>;
};


/** aggregate fields of "construct" */
export type Construct_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Construct_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Construct_Avg_Fields = {
  __typename?: 'construct_avg_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "construct". All fields are combined with a logical 'AND'. */
export type Construct_Bool_Exp = {
  _and?: Maybe<Array<Construct_Bool_Exp>>;
  _not?: Maybe<Construct_Bool_Exp>;
  _or?: Maybe<Array<Construct_Bool_Exp>>;
  construct_parts?: Maybe<Construct_Part_Bool_Exp>;
  construct_projects?: Maybe<Project_Construct_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  created_by_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
};

/** unique or primary key constraints on table "construct" */
export enum Construct_Constraint {
  /** unique or primary key constraint */
  ConstructPkey = 'construct_pkey'
}

/** input type for incrementing numeric columns in table "construct" */
export type Construct_Inc_Input = {
  created_by_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "construct" */
export type Construct_Insert_Input = {
  construct_parts?: Maybe<Construct_Part_Arr_Rel_Insert_Input>;
  construct_projects?: Maybe<Project_Construct_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Construct_Max_Fields = {
  __typename?: 'construct_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Construct_Min_Fields = {
  __typename?: 'construct_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "construct" */
export type Construct_Mutation_Response = {
  __typename?: 'construct_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Construct>;
};

/** input type for inserting object relation for remote table "construct" */
export type Construct_Obj_Rel_Insert_Input = {
  data: Construct_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Construct_On_Conflict>;
};

/** on conflict condition type for table "construct" */
export type Construct_On_Conflict = {
  constraint: Construct_Constraint;
  update_columns?: Array<Construct_Update_Column>;
  where?: Maybe<Construct_Bool_Exp>;
};

/** Ordering options when selecting data from "construct". */
export type Construct_Order_By = {
  construct_parts_aggregate?: Maybe<Construct_Part_Aggregate_Order_By>;
  construct_projects_aggregate?: Maybe<Project_Construct_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
};

/** columns and relationships of "construct_part" */
export type Construct_Part = {
  __typename?: 'construct_part';
  /** An object relationship */
  construct: Construct;
  construct_id: Scalars['uuid'];
  /** An object relationship */
  part: Part;
  part_id: Scalars['uuid'];
};

/** aggregated selection of "construct_part" */
export type Construct_Part_Aggregate = {
  __typename?: 'construct_part_aggregate';
  aggregate?: Maybe<Construct_Part_Aggregate_Fields>;
  nodes: Array<Construct_Part>;
};

/** aggregate fields of "construct_part" */
export type Construct_Part_Aggregate_Fields = {
  __typename?: 'construct_part_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Construct_Part_Max_Fields>;
  min?: Maybe<Construct_Part_Min_Fields>;
};


/** aggregate fields of "construct_part" */
export type Construct_Part_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Construct_Part_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "construct_part" */
export type Construct_Part_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Construct_Part_Max_Order_By>;
  min?: Maybe<Construct_Part_Min_Order_By>;
};

/** input type for inserting array relation for remote table "construct_part" */
export type Construct_Part_Arr_Rel_Insert_Input = {
  data: Array<Construct_Part_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Construct_Part_On_Conflict>;
};

/** Boolean expression to filter rows from the table "construct_part". All fields are combined with a logical 'AND'. */
export type Construct_Part_Bool_Exp = {
  _and?: Maybe<Array<Construct_Part_Bool_Exp>>;
  _not?: Maybe<Construct_Part_Bool_Exp>;
  _or?: Maybe<Array<Construct_Part_Bool_Exp>>;
  construct?: Maybe<Construct_Bool_Exp>;
  construct_id?: Maybe<Uuid_Comparison_Exp>;
  part?: Maybe<Part_Bool_Exp>;
  part_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "construct_part" */
export enum Construct_Part_Constraint {
  /** unique or primary key constraint */
  ConstructPartPkey = 'construct_part_pkey'
}

/** input type for inserting data into table "construct_part" */
export type Construct_Part_Insert_Input = {
  construct?: Maybe<Construct_Obj_Rel_Insert_Input>;
  construct_id?: Maybe<Scalars['uuid']>;
  part?: Maybe<Part_Obj_Rel_Insert_Input>;
  part_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Construct_Part_Max_Fields = {
  __typename?: 'construct_part_max_fields';
  construct_id?: Maybe<Scalars['uuid']>;
  part_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "construct_part" */
export type Construct_Part_Max_Order_By = {
  construct_id?: Maybe<Order_By>;
  part_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Construct_Part_Min_Fields = {
  __typename?: 'construct_part_min_fields';
  construct_id?: Maybe<Scalars['uuid']>;
  part_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "construct_part" */
export type Construct_Part_Min_Order_By = {
  construct_id?: Maybe<Order_By>;
  part_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "construct_part" */
export type Construct_Part_Mutation_Response = {
  __typename?: 'construct_part_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Construct_Part>;
};

/** on conflict condition type for table "construct_part" */
export type Construct_Part_On_Conflict = {
  constraint: Construct_Part_Constraint;
  update_columns?: Array<Construct_Part_Update_Column>;
  where?: Maybe<Construct_Part_Bool_Exp>;
};

/** Ordering options when selecting data from "construct_part". */
export type Construct_Part_Order_By = {
  construct?: Maybe<Construct_Order_By>;
  construct_id?: Maybe<Order_By>;
  part?: Maybe<Part_Order_By>;
  part_id?: Maybe<Order_By>;
};

/** primary key columns input for table: construct_part */
export type Construct_Part_Pk_Columns_Input = {
  construct_id: Scalars['uuid'];
  part_id: Scalars['uuid'];
};

/** select columns of table "construct_part" */
export enum Construct_Part_Select_Column {
  /** column name */
  ConstructId = 'construct_id',
  /** column name */
  PartId = 'part_id'
}

/** input type for updating data in table "construct_part" */
export type Construct_Part_Set_Input = {
  construct_id?: Maybe<Scalars['uuid']>;
  part_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "construct_part" */
export enum Construct_Part_Update_Column {
  /** column name */
  ConstructId = 'construct_id',
  /** column name */
  PartId = 'part_id'
}

/** primary key columns input for table: construct */
export type Construct_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "construct" */
export enum Construct_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "construct" */
export type Construct_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Construct_Stddev_Fields = {
  __typename?: 'construct_stddev_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Construct_Stddev_Pop_Fields = {
  __typename?: 'construct_stddev_pop_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Construct_Stddev_Samp_Fields = {
  __typename?: 'construct_stddev_samp_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Construct_Sum_Fields = {
  __typename?: 'construct_sum_fields';
  created_by_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "construct" */
export enum Construct_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Construct_Var_Pop_Fields = {
  __typename?: 'construct_var_pop_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Construct_Var_Samp_Fields = {
  __typename?: 'construct_var_samp_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Construct_Variance_Fields = {
  __typename?: 'construct_variance_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "construct" */
  delete_construct?: Maybe<Construct_Mutation_Response>;
  /** delete single row from the table: "construct" */
  delete_construct_by_pk?: Maybe<Construct>;
  /** delete data from the table: "construct_part" */
  delete_construct_part?: Maybe<Construct_Part_Mutation_Response>;
  /** delete single row from the table: "construct_part" */
  delete_construct_part_by_pk?: Maybe<Construct_Part>;
  /** delete data from the table: "part" */
  delete_part?: Maybe<Part_Mutation_Response>;
  /** delete single row from the table: "part" */
  delete_part_by_pk?: Maybe<Part>;
  /** delete data from the table: "project" */
  delete_project?: Maybe<Project_Mutation_Response>;
  /** delete single row from the table: "project" */
  delete_project_by_pk?: Maybe<Project>;
  /** delete data from the table: "project_construct" */
  delete_project_construct?: Maybe<Project_Construct_Mutation_Response>;
  /** delete single row from the table: "project_construct" */
  delete_project_construct_by_pk?: Maybe<Project_Construct>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** insert data into the table: "construct" */
  insert_construct?: Maybe<Construct_Mutation_Response>;
  /** insert a single row into the table: "construct" */
  insert_construct_one?: Maybe<Construct>;
  /** insert data into the table: "construct_part" */
  insert_construct_part?: Maybe<Construct_Part_Mutation_Response>;
  /** insert a single row into the table: "construct_part" */
  insert_construct_part_one?: Maybe<Construct_Part>;
  /** insert data into the table: "part" */
  insert_part?: Maybe<Part_Mutation_Response>;
  /** insert a single row into the table: "part" */
  insert_part_one?: Maybe<Part>;
  /** insert data into the table: "project" */
  insert_project?: Maybe<Project_Mutation_Response>;
  /** insert data into the table: "project_construct" */
  insert_project_construct?: Maybe<Project_Construct_Mutation_Response>;
  /** insert a single row into the table: "project_construct" */
  insert_project_construct_one?: Maybe<Project_Construct>;
  /** insert a single row into the table: "project" */
  insert_project_one?: Maybe<Project>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** update data of the table: "construct" */
  update_construct?: Maybe<Construct_Mutation_Response>;
  /** update single row of the table: "construct" */
  update_construct_by_pk?: Maybe<Construct>;
  /** update data of the table: "construct_part" */
  update_construct_part?: Maybe<Construct_Part_Mutation_Response>;
  /** update single row of the table: "construct_part" */
  update_construct_part_by_pk?: Maybe<Construct_Part>;
  /** update data of the table: "part" */
  update_part?: Maybe<Part_Mutation_Response>;
  /** update single row of the table: "part" */
  update_part_by_pk?: Maybe<Part>;
  /** update data of the table: "project" */
  update_project?: Maybe<Project_Mutation_Response>;
  /** update single row of the table: "project" */
  update_project_by_pk?: Maybe<Project>;
  /** update data of the table: "project_construct" */
  update_project_construct?: Maybe<Project_Construct_Mutation_Response>;
  /** update single row of the table: "project_construct" */
  update_project_construct_by_pk?: Maybe<Project_Construct>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
};


/** mutation root */
export type Mutation_RootDelete_ConstructArgs = {
  where: Construct_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Construct_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Construct_PartArgs = {
  where: Construct_Part_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Construct_Part_By_PkArgs = {
  construct_id: Scalars['uuid'];
  part_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_PartArgs = {
  where: Part_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Part_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ProjectArgs = {
  where: Project_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Project_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Project_ConstructArgs = {
  where: Project_Construct_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Project_Construct_By_PkArgs = {
  construct_id: Scalars['uuid'];
  project_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['Int'];
  username: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_ConstructArgs = {
  objects: Array<Construct_Insert_Input>;
  on_conflict?: Maybe<Construct_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Construct_OneArgs = {
  object: Construct_Insert_Input;
  on_conflict?: Maybe<Construct_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Construct_PartArgs = {
  objects: Array<Construct_Part_Insert_Input>;
  on_conflict?: Maybe<Construct_Part_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Construct_Part_OneArgs = {
  object: Construct_Part_Insert_Input;
  on_conflict?: Maybe<Construct_Part_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PartArgs = {
  objects: Array<Part_Insert_Input>;
  on_conflict?: Maybe<Part_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Part_OneArgs = {
  object: Part_Insert_Input;
  on_conflict?: Maybe<Part_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProjectArgs = {
  objects: Array<Project_Insert_Input>;
  on_conflict?: Maybe<Project_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Project_ConstructArgs = {
  objects: Array<Project_Construct_Insert_Input>;
  on_conflict?: Maybe<Project_Construct_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Project_Construct_OneArgs = {
  object: Project_Construct_Insert_Input;
  on_conflict?: Maybe<Project_Construct_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Project_OneArgs = {
  object: Project_Insert_Input;
  on_conflict?: Maybe<Project_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ConstructArgs = {
  _inc?: Maybe<Construct_Inc_Input>;
  _set?: Maybe<Construct_Set_Input>;
  where: Construct_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Construct_By_PkArgs = {
  _inc?: Maybe<Construct_Inc_Input>;
  _set?: Maybe<Construct_Set_Input>;
  pk_columns: Construct_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Construct_PartArgs = {
  _set?: Maybe<Construct_Part_Set_Input>;
  where: Construct_Part_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Construct_Part_By_PkArgs = {
  _set?: Maybe<Construct_Part_Set_Input>;
  pk_columns: Construct_Part_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PartArgs = {
  _inc?: Maybe<Part_Inc_Input>;
  _set?: Maybe<Part_Set_Input>;
  where: Part_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Part_By_PkArgs = {
  _inc?: Maybe<Part_Inc_Input>;
  _set?: Maybe<Part_Set_Input>;
  pk_columns: Part_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ProjectArgs = {
  _inc?: Maybe<Project_Inc_Input>;
  _set?: Maybe<Project_Set_Input>;
  where: Project_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Project_By_PkArgs = {
  _inc?: Maybe<Project_Inc_Input>;
  _set?: Maybe<Project_Set_Input>;
  pk_columns: Project_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Project_ConstructArgs = {
  _set?: Maybe<Project_Construct_Set_Input>;
  where: Project_Construct_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Project_Construct_By_PkArgs = {
  _set?: Maybe<Project_Construct_Set_Input>;
  pk_columns: Project_Construct_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _inc?: Maybe<User_Inc_Input>;
  _set?: Maybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _inc?: Maybe<User_Inc_Input>;
  _set?: Maybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "part" */
export type Part = {
  __typename?: 'part';
  created_at: Scalars['timestamptz'];
  created_by_id?: Maybe<Scalars['Int']>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  part_constructs: Array<Construct_Part>;
  /** An aggregate relationship */
  part_constructs_aggregate: Construct_Part_Aggregate;
  sequence: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user?: Maybe<User>;
};


/** columns and relationships of "part" */
export type PartPart_ConstructsArgs = {
  distinct_on?: Maybe<Array<Construct_Part_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Construct_Part_Order_By>>;
  where?: Maybe<Construct_Part_Bool_Exp>;
};


/** columns and relationships of "part" */
export type PartPart_Constructs_AggregateArgs = {
  distinct_on?: Maybe<Array<Construct_Part_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Construct_Part_Order_By>>;
  where?: Maybe<Construct_Part_Bool_Exp>;
};

/** aggregated selection of "part" */
export type Part_Aggregate = {
  __typename?: 'part_aggregate';
  aggregate?: Maybe<Part_Aggregate_Fields>;
  nodes: Array<Part>;
};

/** aggregate fields of "part" */
export type Part_Aggregate_Fields = {
  __typename?: 'part_aggregate_fields';
  avg?: Maybe<Part_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Part_Max_Fields>;
  min?: Maybe<Part_Min_Fields>;
  stddev?: Maybe<Part_Stddev_Fields>;
  stddev_pop?: Maybe<Part_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Part_Stddev_Samp_Fields>;
  sum?: Maybe<Part_Sum_Fields>;
  var_pop?: Maybe<Part_Var_Pop_Fields>;
  var_samp?: Maybe<Part_Var_Samp_Fields>;
  variance?: Maybe<Part_Variance_Fields>;
};


/** aggregate fields of "part" */
export type Part_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Part_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Part_Avg_Fields = {
  __typename?: 'part_avg_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "part". All fields are combined with a logical 'AND'. */
export type Part_Bool_Exp = {
  _and?: Maybe<Array<Part_Bool_Exp>>;
  _not?: Maybe<Part_Bool_Exp>;
  _or?: Maybe<Array<Part_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  created_by_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  part_constructs?: Maybe<Construct_Part_Bool_Exp>;
  sequence?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
};

/** unique or primary key constraints on table "part" */
export enum Part_Constraint {
  /** unique or primary key constraint */
  PartPkey = 'part_pkey'
}

/** input type for incrementing numeric columns in table "part" */
export type Part_Inc_Input = {
  created_by_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "part" */
export type Part_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  part_constructs?: Maybe<Construct_Part_Arr_Rel_Insert_Input>;
  sequence?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Part_Max_Fields = {
  __typename?: 'part_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  sequence?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Part_Min_Fields = {
  __typename?: 'part_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  sequence?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "part" */
export type Part_Mutation_Response = {
  __typename?: 'part_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Part>;
};

/** input type for inserting object relation for remote table "part" */
export type Part_Obj_Rel_Insert_Input = {
  data: Part_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Part_On_Conflict>;
};

/** on conflict condition type for table "part" */
export type Part_On_Conflict = {
  constraint: Part_Constraint;
  update_columns?: Array<Part_Update_Column>;
  where?: Maybe<Part_Bool_Exp>;
};

/** Ordering options when selecting data from "part". */
export type Part_Order_By = {
  created_at?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  part_constructs_aggregate?: Maybe<Construct_Part_Aggregate_Order_By>;
  sequence?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
};

/** primary key columns input for table: part */
export type Part_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "part" */
export enum Part_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Sequence = 'sequence',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "part" */
export type Part_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  sequence?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Part_Stddev_Fields = {
  __typename?: 'part_stddev_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Part_Stddev_Pop_Fields = {
  __typename?: 'part_stddev_pop_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Part_Stddev_Samp_Fields = {
  __typename?: 'part_stddev_samp_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Part_Sum_Fields = {
  __typename?: 'part_sum_fields';
  created_by_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "part" */
export enum Part_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Sequence = 'sequence',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Part_Var_Pop_Fields = {
  __typename?: 'part_var_pop_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Part_Var_Samp_Fields = {
  __typename?: 'part_var_samp_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Part_Variance_Fields = {
  __typename?: 'part_variance_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "project" */
export type Project = {
  __typename?: 'project';
  created_at: Scalars['timestamptz'];
  created_by_id?: Maybe<Scalars['Int']>;
  description: Scalars['String'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  project_constructs: Array<Project_Construct>;
  /** An aggregate relationship */
  project_constructs_aggregate: Project_Construct_Aggregate;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user?: Maybe<User>;
};


/** columns and relationships of "project" */
export type ProjectProject_ConstructsArgs = {
  distinct_on?: Maybe<Array<Project_Construct_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_Construct_Order_By>>;
  where?: Maybe<Project_Construct_Bool_Exp>;
};


/** columns and relationships of "project" */
export type ProjectProject_Constructs_AggregateArgs = {
  distinct_on?: Maybe<Array<Project_Construct_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_Construct_Order_By>>;
  where?: Maybe<Project_Construct_Bool_Exp>;
};

/** aggregated selection of "project" */
export type Project_Aggregate = {
  __typename?: 'project_aggregate';
  aggregate?: Maybe<Project_Aggregate_Fields>;
  nodes: Array<Project>;
};

/** aggregate fields of "project" */
export type Project_Aggregate_Fields = {
  __typename?: 'project_aggregate_fields';
  avg?: Maybe<Project_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Project_Max_Fields>;
  min?: Maybe<Project_Min_Fields>;
  stddev?: Maybe<Project_Stddev_Fields>;
  stddev_pop?: Maybe<Project_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Project_Stddev_Samp_Fields>;
  sum?: Maybe<Project_Sum_Fields>;
  var_pop?: Maybe<Project_Var_Pop_Fields>;
  var_samp?: Maybe<Project_Var_Samp_Fields>;
  variance?: Maybe<Project_Variance_Fields>;
};


/** aggregate fields of "project" */
export type Project_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Project_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Project_Avg_Fields = {
  __typename?: 'project_avg_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "project". All fields are combined with a logical 'AND'. */
export type Project_Bool_Exp = {
  _and?: Maybe<Array<Project_Bool_Exp>>;
  _not?: Maybe<Project_Bool_Exp>;
  _or?: Maybe<Array<Project_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  created_by_id?: Maybe<Int_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  project_constructs?: Maybe<Project_Construct_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
};

/** unique or primary key constraints on table "project" */
export enum Project_Constraint {
  /** unique or primary key constraint */
  ProjectPkey = 'project_pkey'
}

/** columns and relationships of "project_construct" */
export type Project_Construct = {
  __typename?: 'project_construct';
  /** An object relationship */
  construct: Construct;
  construct_id: Scalars['uuid'];
  /** An object relationship */
  project: Project;
  project_id: Scalars['uuid'];
};

/** aggregated selection of "project_construct" */
export type Project_Construct_Aggregate = {
  __typename?: 'project_construct_aggregate';
  aggregate?: Maybe<Project_Construct_Aggregate_Fields>;
  nodes: Array<Project_Construct>;
};

/** aggregate fields of "project_construct" */
export type Project_Construct_Aggregate_Fields = {
  __typename?: 'project_construct_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Project_Construct_Max_Fields>;
  min?: Maybe<Project_Construct_Min_Fields>;
};


/** aggregate fields of "project_construct" */
export type Project_Construct_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Project_Construct_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "project_construct" */
export type Project_Construct_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Project_Construct_Max_Order_By>;
  min?: Maybe<Project_Construct_Min_Order_By>;
};

/** input type for inserting array relation for remote table "project_construct" */
export type Project_Construct_Arr_Rel_Insert_Input = {
  data: Array<Project_Construct_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Project_Construct_On_Conflict>;
};

/** Boolean expression to filter rows from the table "project_construct". All fields are combined with a logical 'AND'. */
export type Project_Construct_Bool_Exp = {
  _and?: Maybe<Array<Project_Construct_Bool_Exp>>;
  _not?: Maybe<Project_Construct_Bool_Exp>;
  _or?: Maybe<Array<Project_Construct_Bool_Exp>>;
  construct?: Maybe<Construct_Bool_Exp>;
  construct_id?: Maybe<Uuid_Comparison_Exp>;
  project?: Maybe<Project_Bool_Exp>;
  project_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "project_construct" */
export enum Project_Construct_Constraint {
  /** unique or primary key constraint */
  ProjectConstructPkey = 'project_construct_pkey'
}

/** input type for inserting data into table "project_construct" */
export type Project_Construct_Insert_Input = {
  construct?: Maybe<Construct_Obj_Rel_Insert_Input>;
  construct_id?: Maybe<Scalars['uuid']>;
  project?: Maybe<Project_Obj_Rel_Insert_Input>;
  project_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Project_Construct_Max_Fields = {
  __typename?: 'project_construct_max_fields';
  construct_id?: Maybe<Scalars['uuid']>;
  project_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "project_construct" */
export type Project_Construct_Max_Order_By = {
  construct_id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Project_Construct_Min_Fields = {
  __typename?: 'project_construct_min_fields';
  construct_id?: Maybe<Scalars['uuid']>;
  project_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "project_construct" */
export type Project_Construct_Min_Order_By = {
  construct_id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "project_construct" */
export type Project_Construct_Mutation_Response = {
  __typename?: 'project_construct_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Project_Construct>;
};

/** on conflict condition type for table "project_construct" */
export type Project_Construct_On_Conflict = {
  constraint: Project_Construct_Constraint;
  update_columns?: Array<Project_Construct_Update_Column>;
  where?: Maybe<Project_Construct_Bool_Exp>;
};

/** Ordering options when selecting data from "project_construct". */
export type Project_Construct_Order_By = {
  construct?: Maybe<Construct_Order_By>;
  construct_id?: Maybe<Order_By>;
  project?: Maybe<Project_Order_By>;
  project_id?: Maybe<Order_By>;
};

/** primary key columns input for table: project_construct */
export type Project_Construct_Pk_Columns_Input = {
  construct_id: Scalars['uuid'];
  project_id: Scalars['uuid'];
};

/** select columns of table "project_construct" */
export enum Project_Construct_Select_Column {
  /** column name */
  ConstructId = 'construct_id',
  /** column name */
  ProjectId = 'project_id'
}

/** input type for updating data in table "project_construct" */
export type Project_Construct_Set_Input = {
  construct_id?: Maybe<Scalars['uuid']>;
  project_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "project_construct" */
export enum Project_Construct_Update_Column {
  /** column name */
  ConstructId = 'construct_id',
  /** column name */
  ProjectId = 'project_id'
}

/** input type for incrementing numeric columns in table "project" */
export type Project_Inc_Input = {
  created_by_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "project" */
export type Project_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  project_constructs?: Maybe<Project_Construct_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Project_Max_Fields = {
  __typename?: 'project_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Project_Min_Fields = {
  __typename?: 'project_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "project" */
export type Project_Mutation_Response = {
  __typename?: 'project_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Project>;
};

/** input type for inserting object relation for remote table "project" */
export type Project_Obj_Rel_Insert_Input = {
  data: Project_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Project_On_Conflict>;
};

/** on conflict condition type for table "project" */
export type Project_On_Conflict = {
  constraint: Project_Constraint;
  update_columns?: Array<Project_Update_Column>;
  where?: Maybe<Project_Bool_Exp>;
};

/** Ordering options when selecting data from "project". */
export type Project_Order_By = {
  created_at?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  project_constructs_aggregate?: Maybe<Project_Construct_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
};

/** primary key columns input for table: project */
export type Project_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "project" */
export enum Project_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "project" */
export type Project_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Project_Stddev_Fields = {
  __typename?: 'project_stddev_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Project_Stddev_Pop_Fields = {
  __typename?: 'project_stddev_pop_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Project_Stddev_Samp_Fields = {
  __typename?: 'project_stddev_samp_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Project_Sum_Fields = {
  __typename?: 'project_sum_fields';
  created_by_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "project" */
export enum Project_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Project_Var_Pop_Fields = {
  __typename?: 'project_var_pop_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Project_Var_Samp_Fields = {
  __typename?: 'project_var_samp_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Project_Variance_Fields = {
  __typename?: 'project_variance_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "construct" */
  construct: Array<Construct>;
  /** fetch aggregated fields from the table: "construct" */
  construct_aggregate: Construct_Aggregate;
  /** fetch data from the table: "construct" using primary key columns */
  construct_by_pk?: Maybe<Construct>;
  /** fetch data from the table: "construct_part" */
  construct_part: Array<Construct_Part>;
  /** fetch aggregated fields from the table: "construct_part" */
  construct_part_aggregate: Construct_Part_Aggregate;
  /** fetch data from the table: "construct_part" using primary key columns */
  construct_part_by_pk?: Maybe<Construct_Part>;
  /** fetch data from the table: "part" */
  part: Array<Part>;
  /** fetch aggregated fields from the table: "part" */
  part_aggregate: Part_Aggregate;
  /** fetch data from the table: "part" using primary key columns */
  part_by_pk?: Maybe<Part>;
  /** fetch data from the table: "project" */
  project: Array<Project>;
  /** fetch aggregated fields from the table: "project" */
  project_aggregate: Project_Aggregate;
  /** fetch data from the table: "project" using primary key columns */
  project_by_pk?: Maybe<Project>;
  /** fetch data from the table: "project_construct" */
  project_construct: Array<Project_Construct>;
  /** fetch aggregated fields from the table: "project_construct" */
  project_construct_aggregate: Project_Construct_Aggregate;
  /** fetch data from the table: "project_construct" using primary key columns */
  project_construct_by_pk?: Maybe<Project_Construct>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Query_RootConstructArgs = {
  distinct_on?: Maybe<Array<Construct_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Construct_Order_By>>;
  where?: Maybe<Construct_Bool_Exp>;
};


export type Query_RootConstruct_AggregateArgs = {
  distinct_on?: Maybe<Array<Construct_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Construct_Order_By>>;
  where?: Maybe<Construct_Bool_Exp>;
};


export type Query_RootConstruct_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootConstruct_PartArgs = {
  distinct_on?: Maybe<Array<Construct_Part_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Construct_Part_Order_By>>;
  where?: Maybe<Construct_Part_Bool_Exp>;
};


export type Query_RootConstruct_Part_AggregateArgs = {
  distinct_on?: Maybe<Array<Construct_Part_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Construct_Part_Order_By>>;
  where?: Maybe<Construct_Part_Bool_Exp>;
};


export type Query_RootConstruct_Part_By_PkArgs = {
  construct_id: Scalars['uuid'];
  part_id: Scalars['uuid'];
};


export type Query_RootPartArgs = {
  distinct_on?: Maybe<Array<Part_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Part_Order_By>>;
  where?: Maybe<Part_Bool_Exp>;
};


export type Query_RootPart_AggregateArgs = {
  distinct_on?: Maybe<Array<Part_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Part_Order_By>>;
  where?: Maybe<Part_Bool_Exp>;
};


export type Query_RootPart_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootProjectArgs = {
  distinct_on?: Maybe<Array<Project_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_Order_By>>;
  where?: Maybe<Project_Bool_Exp>;
};


export type Query_RootProject_AggregateArgs = {
  distinct_on?: Maybe<Array<Project_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_Order_By>>;
  where?: Maybe<Project_Bool_Exp>;
};


export type Query_RootProject_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootProject_ConstructArgs = {
  distinct_on?: Maybe<Array<Project_Construct_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_Construct_Order_By>>;
  where?: Maybe<Project_Construct_Bool_Exp>;
};


export type Query_RootProject_Construct_AggregateArgs = {
  distinct_on?: Maybe<Array<Project_Construct_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_Construct_Order_By>>;
  where?: Maybe<Project_Construct_Bool_Exp>;
};


export type Query_RootProject_Construct_By_PkArgs = {
  construct_id: Scalars['uuid'];
  project_id: Scalars['uuid'];
};


export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['Int'];
  username: Scalars['String'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "construct" */
  construct: Array<Construct>;
  /** fetch aggregated fields from the table: "construct" */
  construct_aggregate: Construct_Aggregate;
  /** fetch data from the table: "construct" using primary key columns */
  construct_by_pk?: Maybe<Construct>;
  /** fetch data from the table: "construct_part" */
  construct_part: Array<Construct_Part>;
  /** fetch aggregated fields from the table: "construct_part" */
  construct_part_aggregate: Construct_Part_Aggregate;
  /** fetch data from the table: "construct_part" using primary key columns */
  construct_part_by_pk?: Maybe<Construct_Part>;
  /** fetch data from the table: "part" */
  part: Array<Part>;
  /** fetch aggregated fields from the table: "part" */
  part_aggregate: Part_Aggregate;
  /** fetch data from the table: "part" using primary key columns */
  part_by_pk?: Maybe<Part>;
  /** fetch data from the table: "project" */
  project: Array<Project>;
  /** fetch aggregated fields from the table: "project" */
  project_aggregate: Project_Aggregate;
  /** fetch data from the table: "project" using primary key columns */
  project_by_pk?: Maybe<Project>;
  /** fetch data from the table: "project_construct" */
  project_construct: Array<Project_Construct>;
  /** fetch aggregated fields from the table: "project_construct" */
  project_construct_aggregate: Project_Construct_Aggregate;
  /** fetch data from the table: "project_construct" using primary key columns */
  project_construct_by_pk?: Maybe<Project_Construct>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Subscription_RootConstructArgs = {
  distinct_on?: Maybe<Array<Construct_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Construct_Order_By>>;
  where?: Maybe<Construct_Bool_Exp>;
};


export type Subscription_RootConstruct_AggregateArgs = {
  distinct_on?: Maybe<Array<Construct_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Construct_Order_By>>;
  where?: Maybe<Construct_Bool_Exp>;
};


export type Subscription_RootConstruct_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootConstruct_PartArgs = {
  distinct_on?: Maybe<Array<Construct_Part_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Construct_Part_Order_By>>;
  where?: Maybe<Construct_Part_Bool_Exp>;
};


export type Subscription_RootConstruct_Part_AggregateArgs = {
  distinct_on?: Maybe<Array<Construct_Part_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Construct_Part_Order_By>>;
  where?: Maybe<Construct_Part_Bool_Exp>;
};


export type Subscription_RootConstruct_Part_By_PkArgs = {
  construct_id: Scalars['uuid'];
  part_id: Scalars['uuid'];
};


export type Subscription_RootPartArgs = {
  distinct_on?: Maybe<Array<Part_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Part_Order_By>>;
  where?: Maybe<Part_Bool_Exp>;
};


export type Subscription_RootPart_AggregateArgs = {
  distinct_on?: Maybe<Array<Part_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Part_Order_By>>;
  where?: Maybe<Part_Bool_Exp>;
};


export type Subscription_RootPart_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootProjectArgs = {
  distinct_on?: Maybe<Array<Project_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_Order_By>>;
  where?: Maybe<Project_Bool_Exp>;
};


export type Subscription_RootProject_AggregateArgs = {
  distinct_on?: Maybe<Array<Project_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_Order_By>>;
  where?: Maybe<Project_Bool_Exp>;
};


export type Subscription_RootProject_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootProject_ConstructArgs = {
  distinct_on?: Maybe<Array<Project_Construct_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_Construct_Order_By>>;
  where?: Maybe<Project_Construct_Bool_Exp>;
};


export type Subscription_RootProject_Construct_AggregateArgs = {
  distinct_on?: Maybe<Array<Project_Construct_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_Construct_Order_By>>;
  where?: Maybe<Project_Construct_Bool_Exp>;
};


export type Subscription_RootProject_Construct_By_PkArgs = {
  construct_id: Scalars['uuid'];
  project_id: Scalars['uuid'];
};


export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['Int'];
  username: Scalars['String'];
};


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  email: Scalars['String'];
  first_name?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  last_login?: Maybe<Scalars['timestamptz']>;
  last_name?: Maybe<Scalars['String']>;
  organization?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  avg?: Maybe<User_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
  stddev?: Maybe<User_Stddev_Fields>;
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sum_Fields>;
  var_pop?: Maybe<User_Var_Pop_Fields>;
  var_samp?: Maybe<User_Var_Samp_Fields>;
  variance?: Maybe<User_Variance_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
  __typename?: 'user_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: Maybe<Array<User_Bool_Exp>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<User_Bool_Exp>>;
  email?: Maybe<String_Comparison_Exp>;
  first_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  last_login?: Maybe<Timestamptz_Comparison_Exp>;
  last_name?: Maybe<String_Comparison_Exp>;
  organization?: Maybe<String_Comparison_Exp>;
  username?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserPkey = 'user_pkey',
  /** unique or primary key constraint */
  UserUsernameKey = 'user_username_key'
}

/** input type for incrementing numeric columns in table "user" */
export type User_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_login?: Maybe<Scalars['timestamptz']>;
  last_name?: Maybe<Scalars['String']>;
  organization?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_login?: Maybe<Scalars['timestamptz']>;
  last_name?: Maybe<Scalars['String']>;
  organization?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_login?: Maybe<Scalars['timestamptz']>;
  last_name?: Maybe<Scalars['String']>;
  organization?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<User_On_Conflict>;
};

/** on conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: Maybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_login?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  organization?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  id: Scalars['Int'];
  username: Scalars['String'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastLogin = 'last_login',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Organization = 'organization',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_login?: Maybe<Scalars['timestamptz']>;
  last_name?: Maybe<Scalars['String']>;
  organization?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
  __typename?: 'user_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  __typename?: 'user_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  __typename?: 'user_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
  __typename?: 'user_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastLogin = 'last_login',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Organization = 'organization',
  /** column name */
  Username = 'username'
}

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
  __typename?: 'user_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  __typename?: 'user_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
  __typename?: 'user_variance_fields';
  id?: Maybe<Scalars['Float']>;
};


/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type ConstructFieldsFragment = (
  { __typename?: 'construct' }
  & Pick<Construct, 'id' | 'name'>
);

export type ConstructQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type ConstructQuery = (
  { __typename?: 'query_root' }
  & { construct: Array<(
    { __typename?: 'construct' }
    & { construct_projects: Array<(
      { __typename?: 'project_construct' }
      & Pick<Project_Construct, 'project_id'>
    )> }
    & ConstructFieldsFragment
  )> }
);

export type CreateConstructMutationVariables = Exact<{
  input: Construct_Insert_Input;
}>;


export type CreateConstructMutation = (
  { __typename?: 'mutation_root' }
  & { insert_construct_one?: Maybe<(
    { __typename?: 'construct' }
    & ConstructFieldsFragment
  )> }
);

export type UpdateConstructMutationVariables = Exact<{
  id: Scalars['uuid'];
  input: Construct_Set_Input;
}>;


export type UpdateConstructMutation = (
  { __typename?: 'mutation_root' }
  & { update_construct_by_pk?: Maybe<(
    { __typename?: 'construct' }
    & ConstructFieldsFragment
  )> }
);

export type ProjectFieldsFragment = (
  { __typename?: 'project' }
  & Pick<Project, 'id' | 'name' | 'description'>
);

export type ProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectsQuery = (
  { __typename?: 'query_root' }
  & { project: Array<(
    { __typename?: 'project' }
    & { project_constructs: Array<(
      { __typename?: 'project_construct' }
      & { construct: (
        { __typename?: 'construct' }
        & ConstructFieldsFragment
      ) }
    )> }
    & ProjectFieldsFragment
  )> }
);

export type ProjectQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type ProjectQuery = (
  { __typename?: 'query_root' }
  & { project: Array<(
    { __typename?: 'project' }
    & ProjectFieldsFragment
  )> }
);

export type CreateProjectMutationVariables = Exact<{
  input: Project_Insert_Input;
}>;


export type CreateProjectMutation = (
  { __typename?: 'mutation_root' }
  & { insert_project_one?: Maybe<(
    { __typename?: 'project' }
    & Pick<Project, 'id' | 'name'>
  )> }
);

export type UpdateProjectMutationVariables = Exact<{
  id: Scalars['uuid'];
  input: Project_Set_Input;
}>;


export type UpdateProjectMutation = (
  { __typename?: 'mutation_root' }
  & { update_project_by_pk?: Maybe<(
    { __typename?: 'project' }
    & ProjectFieldsFragment
  )> }
);

export type CreateProjectConstructMutationVariables = Exact<{
  input: Project_Construct_Insert_Input;
}>;


export type CreateProjectConstructMutation = (
  { __typename?: 'mutation_root' }
  & { insert_project_construct_one?: Maybe<(
    { __typename?: 'project_construct' }
    & Pick<Project_Construct, 'project_id' | 'construct_id'>
  )> }
);

export const ConstructFieldsFragmentDoc = gql`
    fragment ConstructFields on construct {
  id
  name
}
    `;
export const ProjectFieldsFragmentDoc = gql`
    fragment ProjectFields on project {
  id
  name
  description
}
    `;
export const ConstructDocument = gql`
    query Construct($id: uuid!) {
  construct(where: {id: {_eq: $id}}) {
    ...ConstructFields
    construct_projects {
      project_id
    }
  }
}
    ${ConstructFieldsFragmentDoc}`;
export const CreateConstructDocument = gql`
    mutation CreateConstruct($input: construct_insert_input!) {
  insert_construct_one(object: $input) {
    ...ConstructFields
  }
}
    ${ConstructFieldsFragmentDoc}`;
export const UpdateConstructDocument = gql`
    mutation UpdateConstruct($id: uuid!, $input: construct_set_input!) {
  update_construct_by_pk(pk_columns: {id: $id}, _set: $input) {
    ...ConstructFields
  }
}
    ${ConstructFieldsFragmentDoc}`;
export const ProjectsDocument = gql`
    query Projects {
  project(order_by: {created_at: desc}) {
    ...ProjectFields
    project_constructs(order_by: {construct: {created_at: desc}}) {
      construct {
        ...ConstructFields
      }
    }
  }
}
    ${ProjectFieldsFragmentDoc}
${ConstructFieldsFragmentDoc}`;
export const ProjectDocument = gql`
    query Project($id: uuid!) {
  project(where: {id: {_eq: $id}}) {
    ...ProjectFields
  }
}
    ${ProjectFieldsFragmentDoc}`;
export const CreateProjectDocument = gql`
    mutation CreateProject($input: project_insert_input!) {
  insert_project_one(object: $input) {
    id
    name
  }
}
    `;
export const UpdateProjectDocument = gql`
    mutation UpdateProject($id: uuid!, $input: project_set_input!) {
  update_project_by_pk(pk_columns: {id: $id}, _set: $input) {
    ...ProjectFields
  }
}
    ${ProjectFieldsFragmentDoc}`;
export const CreateProjectConstructDocument = gql`
    mutation CreateProjectConstruct($input: project_construct_insert_input!) {
  insert_project_construct_one(object: $input) {
    project_id
    construct_id
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Construct(variables: ConstructQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ConstructQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ConstructQuery>(ConstructDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Construct');
    },
    CreateConstruct(variables: CreateConstructMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateConstructMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateConstructMutation>(CreateConstructDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateConstruct');
    },
    UpdateConstruct(variables: UpdateConstructMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateConstructMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateConstructMutation>(UpdateConstructDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateConstruct');
    },
    Projects(variables?: ProjectsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ProjectsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProjectsQuery>(ProjectsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Projects');
    },
    Project(variables: ProjectQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ProjectQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProjectQuery>(ProjectDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Project');
    },
    CreateProject(variables: CreateProjectMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateProjectMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateProjectMutation>(CreateProjectDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateProject');
    },
    UpdateProject(variables: UpdateProjectMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateProjectMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateProjectMutation>(UpdateProjectDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateProject');
    },
    CreateProjectConstruct(variables: CreateProjectConstructMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateProjectConstructMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateProjectConstructMutation>(CreateProjectConstructDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateProjectConstruct');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export function getSdkWithHooks(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  const sdk = getSdk(client, withWrapper);
  return {
    ...sdk,
    useConstruct(key: SWRKeyInterface, variables: ConstructQueryVariables, config?: SWRConfigInterface<ConstructQuery, ClientError>) {
      return useSWR<ConstructQuery, ClientError>(key, () => sdk.Construct(variables), config);
    },
    useProjects(key: SWRKeyInterface, variables?: ProjectsQueryVariables, config?: SWRConfigInterface<ProjectsQuery, ClientError>) {
      return useSWR<ProjectsQuery, ClientError>(key, () => sdk.Projects(variables), config);
    },
    useProject(key: SWRKeyInterface, variables: ProjectQueryVariables, config?: SWRConfigInterface<ProjectQuery, ClientError>) {
      return useSWR<ProjectQuery, ClientError>(key, () => sdk.Project(variables), config);
    }
  };
}
export type SdkWithHooks = ReturnType<typeof getSdkWithHooks>;