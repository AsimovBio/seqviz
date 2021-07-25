import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { gql } from 'graphql-request';
import { ClientError } from 'graphql-request/dist/types';
import useSWR, {
  ConfigInterface as SWRConfigInterface,
  keyInterface as SWRKeyInterface,
} from 'swr';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
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

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
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
  ConstructPkey = 'construct_pkey',
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
  id: Scalars['uuid'];
  index: Scalars['Int'];
  orientation: Scalars['String'];
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
  avg?: Maybe<Construct_Part_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Construct_Part_Max_Fields>;
  min?: Maybe<Construct_Part_Min_Fields>;
  stddev?: Maybe<Construct_Part_Stddev_Fields>;
  stddev_pop?: Maybe<Construct_Part_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Construct_Part_Stddev_Samp_Fields>;
  sum?: Maybe<Construct_Part_Sum_Fields>;
  var_pop?: Maybe<Construct_Part_Var_Pop_Fields>;
  var_samp?: Maybe<Construct_Part_Var_Samp_Fields>;
  variance?: Maybe<Construct_Part_Variance_Fields>;
};

/** aggregate fields of "construct_part" */
export type Construct_Part_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Construct_Part_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "construct_part" */
export type Construct_Part_Aggregate_Order_By = {
  avg?: Maybe<Construct_Part_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Construct_Part_Max_Order_By>;
  min?: Maybe<Construct_Part_Min_Order_By>;
  stddev?: Maybe<Construct_Part_Stddev_Order_By>;
  stddev_pop?: Maybe<Construct_Part_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Construct_Part_Stddev_Samp_Order_By>;
  sum?: Maybe<Construct_Part_Sum_Order_By>;
  var_pop?: Maybe<Construct_Part_Var_Pop_Order_By>;
  var_samp?: Maybe<Construct_Part_Var_Samp_Order_By>;
  variance?: Maybe<Construct_Part_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "construct_part" */
export type Construct_Part_Arr_Rel_Insert_Input = {
  data: Array<Construct_Part_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Construct_Part_On_Conflict>;
};

/** aggregate avg on columns */
export type Construct_Part_Avg_Fields = {
  __typename?: 'construct_part_avg_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "construct_part" */
export type Construct_Part_Avg_Order_By = {
  index?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "construct_part". All fields are combined with a logical 'AND'. */
export type Construct_Part_Bool_Exp = {
  _and?: Maybe<Array<Construct_Part_Bool_Exp>>;
  _not?: Maybe<Construct_Part_Bool_Exp>;
  _or?: Maybe<Array<Construct_Part_Bool_Exp>>;
  construct?: Maybe<Construct_Bool_Exp>;
  construct_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  index?: Maybe<Int_Comparison_Exp>;
  orientation?: Maybe<String_Comparison_Exp>;
  part?: Maybe<Part_Bool_Exp>;
  part_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "construct_part" */
export enum Construct_Part_Constraint {
  /** unique or primary key constraint */
  ConstructPartIdKey = 'construct_part_id_key',
  /** unique or primary key constraint */
  ConstructPartIndexConstructIdKey = 'construct_part_index_construct_id_key',
  /** unique or primary key constraint */
  ConstructPartPkey = 'construct_part_pkey',
}

/** input type for incrementing numeric columns in table "construct_part" */
export type Construct_Part_Inc_Input = {
  index?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "construct_part" */
export type Construct_Part_Insert_Input = {
  construct?: Maybe<Construct_Obj_Rel_Insert_Input>;
  construct_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  index?: Maybe<Scalars['Int']>;
  orientation?: Maybe<Scalars['String']>;
  part?: Maybe<Part_Obj_Rel_Insert_Input>;
  part_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Construct_Part_Max_Fields = {
  __typename?: 'construct_part_max_fields';
  construct_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  index?: Maybe<Scalars['Int']>;
  orientation?: Maybe<Scalars['String']>;
  part_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "construct_part" */
export type Construct_Part_Max_Order_By = {
  construct_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  orientation?: Maybe<Order_By>;
  part_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Construct_Part_Min_Fields = {
  __typename?: 'construct_part_min_fields';
  construct_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  index?: Maybe<Scalars['Int']>;
  orientation?: Maybe<Scalars['String']>;
  part_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "construct_part" */
export type Construct_Part_Min_Order_By = {
  construct_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  orientation?: Maybe<Order_By>;
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
  id?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  orientation?: Maybe<Order_By>;
  part?: Maybe<Part_Order_By>;
  part_id?: Maybe<Order_By>;
};

/** primary key columns input for table: construct_part */
export type Construct_Part_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "construct_part" */
export enum Construct_Part_Select_Column {
  /** column name */
  ConstructId = 'construct_id',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  Orientation = 'orientation',
  /** column name */
  PartId = 'part_id',
}

/** input type for updating data in table "construct_part" */
export type Construct_Part_Set_Input = {
  construct_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  index?: Maybe<Scalars['Int']>;
  orientation?: Maybe<Scalars['String']>;
  part_id?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Construct_Part_Stddev_Fields = {
  __typename?: 'construct_part_stddev_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "construct_part" */
export type Construct_Part_Stddev_Order_By = {
  index?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Construct_Part_Stddev_Pop_Fields = {
  __typename?: 'construct_part_stddev_pop_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "construct_part" */
export type Construct_Part_Stddev_Pop_Order_By = {
  index?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Construct_Part_Stddev_Samp_Fields = {
  __typename?: 'construct_part_stddev_samp_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "construct_part" */
export type Construct_Part_Stddev_Samp_Order_By = {
  index?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Construct_Part_Sum_Fields = {
  __typename?: 'construct_part_sum_fields';
  index?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "construct_part" */
export type Construct_Part_Sum_Order_By = {
  index?: Maybe<Order_By>;
};

/** update columns of table "construct_part" */
export enum Construct_Part_Update_Column {
  /** column name */
  ConstructId = 'construct_id',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  Orientation = 'orientation',
  /** column name */
  PartId = 'part_id',
}

/** aggregate var_pop on columns */
export type Construct_Part_Var_Pop_Fields = {
  __typename?: 'construct_part_var_pop_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "construct_part" */
export type Construct_Part_Var_Pop_Order_By = {
  index?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Construct_Part_Var_Samp_Fields = {
  __typename?: 'construct_part_var_samp_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "construct_part" */
export type Construct_Part_Var_Samp_Order_By = {
  index?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Construct_Part_Variance_Fields = {
  __typename?: 'construct_part_variance_fields';
  index?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "construct_part" */
export type Construct_Part_Variance_Order_By = {
  index?: Maybe<Order_By>;
};

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
  UpdatedAt = 'updated_at',
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
  UpdatedAt = 'updated_at',
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

/** columns and relationships of "django_celery_results_taskresult" */
export type Django_Celery_Results_Taskresult = {
  __typename?: 'django_celery_results_taskresult';
  content_encoding: Scalars['String'];
  content_type: Scalars['String'];
  date_done: Scalars['timestamptz'];
  hidden: Scalars['Boolean'];
  id: Scalars['Int'];
  meta?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  task_args?: Maybe<Scalars['String']>;
  task_id: Scalars['String'];
  task_kwargs?: Maybe<Scalars['String']>;
  task_name?: Maybe<Scalars['String']>;
  traceback?: Maybe<Scalars['String']>;
};

/** aggregated selection of "django_celery_results_taskresult" */
export type Django_Celery_Results_Taskresult_Aggregate = {
  __typename?: 'django_celery_results_taskresult_aggregate';
  aggregate?: Maybe<Django_Celery_Results_Taskresult_Aggregate_Fields>;
  nodes: Array<Django_Celery_Results_Taskresult>;
};

/** aggregate fields of "django_celery_results_taskresult" */
export type Django_Celery_Results_Taskresult_Aggregate_Fields = {
  __typename?: 'django_celery_results_taskresult_aggregate_fields';
  avg?: Maybe<Django_Celery_Results_Taskresult_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Django_Celery_Results_Taskresult_Max_Fields>;
  min?: Maybe<Django_Celery_Results_Taskresult_Min_Fields>;
  stddev?: Maybe<Django_Celery_Results_Taskresult_Stddev_Fields>;
  stddev_pop?: Maybe<Django_Celery_Results_Taskresult_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Django_Celery_Results_Taskresult_Stddev_Samp_Fields>;
  sum?: Maybe<Django_Celery_Results_Taskresult_Sum_Fields>;
  var_pop?: Maybe<Django_Celery_Results_Taskresult_Var_Pop_Fields>;
  var_samp?: Maybe<Django_Celery_Results_Taskresult_Var_Samp_Fields>;
  variance?: Maybe<Django_Celery_Results_Taskresult_Variance_Fields>;
};

/** aggregate fields of "django_celery_results_taskresult" */
export type Django_Celery_Results_Taskresult_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Django_Celery_Results_Taskresult_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Django_Celery_Results_Taskresult_Avg_Fields = {
  __typename?: 'django_celery_results_taskresult_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "django_celery_results_taskresult". All fields are combined with a logical 'AND'. */
export type Django_Celery_Results_Taskresult_Bool_Exp = {
  _and?: Maybe<Array<Django_Celery_Results_Taskresult_Bool_Exp>>;
  _not?: Maybe<Django_Celery_Results_Taskresult_Bool_Exp>;
  _or?: Maybe<Array<Django_Celery_Results_Taskresult_Bool_Exp>>;
  content_encoding?: Maybe<String_Comparison_Exp>;
  content_type?: Maybe<String_Comparison_Exp>;
  date_done?: Maybe<Timestamptz_Comparison_Exp>;
  hidden?: Maybe<Boolean_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  meta?: Maybe<String_Comparison_Exp>;
  result?: Maybe<String_Comparison_Exp>;
  status?: Maybe<String_Comparison_Exp>;
  task_args?: Maybe<String_Comparison_Exp>;
  task_id?: Maybe<String_Comparison_Exp>;
  task_kwargs?: Maybe<String_Comparison_Exp>;
  task_name?: Maybe<String_Comparison_Exp>;
  traceback?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "django_celery_results_taskresult" */
export enum Django_Celery_Results_Taskresult_Constraint {
  /** unique or primary key constraint */
  DjangoCeleryResultsTaskresultPkey = 'django_celery_results_taskresult_pkey',
  /** unique or primary key constraint */
  DjangoCeleryResultsTaskresultTaskIdKey = 'django_celery_results_taskresult_task_id_key',
}

/** input type for incrementing numeric columns in table "django_celery_results_taskresult" */
export type Django_Celery_Results_Taskresult_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "django_celery_results_taskresult" */
export type Django_Celery_Results_Taskresult_Insert_Input = {
  content_encoding?: Maybe<Scalars['String']>;
  content_type?: Maybe<Scalars['String']>;
  date_done?: Maybe<Scalars['timestamptz']>;
  hidden?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  meta?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  task_args?: Maybe<Scalars['String']>;
  task_id?: Maybe<Scalars['String']>;
  task_kwargs?: Maybe<Scalars['String']>;
  task_name?: Maybe<Scalars['String']>;
  traceback?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Django_Celery_Results_Taskresult_Max_Fields = {
  __typename?: 'django_celery_results_taskresult_max_fields';
  content_encoding?: Maybe<Scalars['String']>;
  content_type?: Maybe<Scalars['String']>;
  date_done?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  meta?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  task_args?: Maybe<Scalars['String']>;
  task_id?: Maybe<Scalars['String']>;
  task_kwargs?: Maybe<Scalars['String']>;
  task_name?: Maybe<Scalars['String']>;
  traceback?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Django_Celery_Results_Taskresult_Min_Fields = {
  __typename?: 'django_celery_results_taskresult_min_fields';
  content_encoding?: Maybe<Scalars['String']>;
  content_type?: Maybe<Scalars['String']>;
  date_done?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  meta?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  task_args?: Maybe<Scalars['String']>;
  task_id?: Maybe<Scalars['String']>;
  task_kwargs?: Maybe<Scalars['String']>;
  task_name?: Maybe<Scalars['String']>;
  traceback?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "django_celery_results_taskresult" */
export type Django_Celery_Results_Taskresult_Mutation_Response = {
  __typename?: 'django_celery_results_taskresult_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Django_Celery_Results_Taskresult>;
};

/** on conflict condition type for table "django_celery_results_taskresult" */
export type Django_Celery_Results_Taskresult_On_Conflict = {
  constraint: Django_Celery_Results_Taskresult_Constraint;
  update_columns?: Array<Django_Celery_Results_Taskresult_Update_Column>;
  where?: Maybe<Django_Celery_Results_Taskresult_Bool_Exp>;
};

/** Ordering options when selecting data from "django_celery_results_taskresult". */
export type Django_Celery_Results_Taskresult_Order_By = {
  content_encoding?: Maybe<Order_By>;
  content_type?: Maybe<Order_By>;
  date_done?: Maybe<Order_By>;
  hidden?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  meta?: Maybe<Order_By>;
  result?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  task_args?: Maybe<Order_By>;
  task_id?: Maybe<Order_By>;
  task_kwargs?: Maybe<Order_By>;
  task_name?: Maybe<Order_By>;
  traceback?: Maybe<Order_By>;
};

/** primary key columns input for table: django_celery_results_taskresult */
export type Django_Celery_Results_Taskresult_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "django_celery_results_taskresult" */
export enum Django_Celery_Results_Taskresult_Select_Column {
  /** column name */
  ContentEncoding = 'content_encoding',
  /** column name */
  ContentType = 'content_type',
  /** column name */
  DateDone = 'date_done',
  /** column name */
  Hidden = 'hidden',
  /** column name */
  Id = 'id',
  /** column name */
  Meta = 'meta',
  /** column name */
  Result = 'result',
  /** column name */
  Status = 'status',
  /** column name */
  TaskArgs = 'task_args',
  /** column name */
  TaskId = 'task_id',
  /** column name */
  TaskKwargs = 'task_kwargs',
  /** column name */
  TaskName = 'task_name',
  /** column name */
  Traceback = 'traceback',
}

/** input type for updating data in table "django_celery_results_taskresult" */
export type Django_Celery_Results_Taskresult_Set_Input = {
  content_encoding?: Maybe<Scalars['String']>;
  content_type?: Maybe<Scalars['String']>;
  date_done?: Maybe<Scalars['timestamptz']>;
  hidden?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  meta?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  task_args?: Maybe<Scalars['String']>;
  task_id?: Maybe<Scalars['String']>;
  task_kwargs?: Maybe<Scalars['String']>;
  task_name?: Maybe<Scalars['String']>;
  traceback?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Django_Celery_Results_Taskresult_Stddev_Fields = {
  __typename?: 'django_celery_results_taskresult_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Django_Celery_Results_Taskresult_Stddev_Pop_Fields = {
  __typename?: 'django_celery_results_taskresult_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Django_Celery_Results_Taskresult_Stddev_Samp_Fields = {
  __typename?: 'django_celery_results_taskresult_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Django_Celery_Results_Taskresult_Sum_Fields = {
  __typename?: 'django_celery_results_taskresult_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "django_celery_results_taskresult" */
export enum Django_Celery_Results_Taskresult_Update_Column {
  /** column name */
  ContentEncoding = 'content_encoding',
  /** column name */
  ContentType = 'content_type',
  /** column name */
  DateDone = 'date_done',
  /** column name */
  Hidden = 'hidden',
  /** column name */
  Id = 'id',
  /** column name */
  Meta = 'meta',
  /** column name */
  Result = 'result',
  /** column name */
  Status = 'status',
  /** column name */
  TaskArgs = 'task_args',
  /** column name */
  TaskId = 'task_id',
  /** column name */
  TaskKwargs = 'task_kwargs',
  /** column name */
  TaskName = 'task_name',
  /** column name */
  Traceback = 'traceback',
}

/** aggregate var_pop on columns */
export type Django_Celery_Results_Taskresult_Var_Pop_Fields = {
  __typename?: 'django_celery_results_taskresult_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Django_Celery_Results_Taskresult_Var_Samp_Fields = {
  __typename?: 'django_celery_results_taskresult_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Django_Celery_Results_Taskresult_Variance_Fields = {
  __typename?: 'django_celery_results_taskresult_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "experiments_experiment" */
export type Experiments_Experiment = {
  __typename?: 'experiments_experiment';
  benchling_id: Scalars['String'];
  chart: Scalars['String'];
  created_by_id?: Maybe<Scalars['Int']>;
  date: Scalars['timestamptz'];
  date_created: Scalars['timestamptz'];
  description: Scalars['String'];
  display_name: Scalars['String'];
  /** An array relationship */
  experiments_experiment_analyses: Array<Experiments_Experiment_Analyses>;
  /** An aggregate relationship */
  experiments_experiment_analyses_aggregate: Experiments_Experiment_Analyses_Aggregate;
  /** An array relationship */
  experiments_experiment_files: Array<Experiments_Experiment_Files>;
  /** An aggregate relationship */
  experiments_experiment_files_aggregate: Experiments_Experiment_Files_Aggregate;
  /** fetch data from the table: "experiments_project_experiments" */
  experiments_project_experiments: Array<Experiments_Project_Experiments>;
  /** An aggregate relationship */
  experiments_project_experiments_aggregate: Experiments_Project_Experiments_Aggregate;
  id: Scalars['uuid'];
  integration_type: Scalars['String'];
  metadata: Scalars['String'];
  /** An array relationship */
  parts_catalog_experimentnodes: Array<Parts_Catalog_Experimentnode>;
  /** An aggregate relationship */
  parts_catalog_experimentnodes_aggregate: Parts_Catalog_Experimentnode_Aggregate;
  type: Scalars['String'];
  /** An object relationship */
  users_customuser?: Maybe<Users_Customuser>;
};

/** columns and relationships of "experiments_experiment" */
export type Experiments_ExperimentExperiments_Experiment_AnalysesArgs = {
  distinct_on?: Maybe<Array<Experiments_Experiment_Analyses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Experiment_Analyses_Order_By>>;
  where?: Maybe<Experiments_Experiment_Analyses_Bool_Exp>;
};

/** columns and relationships of "experiments_experiment" */
export type Experiments_ExperimentExperiments_Experiment_Analyses_AggregateArgs =
  {
    distinct_on?: Maybe<Array<Experiments_Experiment_Analyses_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Experiments_Experiment_Analyses_Order_By>>;
    where?: Maybe<Experiments_Experiment_Analyses_Bool_Exp>;
  };

/** columns and relationships of "experiments_experiment" */
export type Experiments_ExperimentExperiments_Experiment_FilesArgs = {
  distinct_on?: Maybe<Array<Experiments_Experiment_Files_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Experiment_Files_Order_By>>;
  where?: Maybe<Experiments_Experiment_Files_Bool_Exp>;
};

/** columns and relationships of "experiments_experiment" */
export type Experiments_ExperimentExperiments_Experiment_Files_AggregateArgs = {
  distinct_on?: Maybe<Array<Experiments_Experiment_Files_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Experiment_Files_Order_By>>;
  where?: Maybe<Experiments_Experiment_Files_Bool_Exp>;
};

/** columns and relationships of "experiments_experiment" */
export type Experiments_ExperimentExperiments_Project_ExperimentsArgs = {
  distinct_on?: Maybe<Array<Experiments_Project_Experiments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Project_Experiments_Order_By>>;
  where?: Maybe<Experiments_Project_Experiments_Bool_Exp>;
};

/** columns and relationships of "experiments_experiment" */
export type Experiments_ExperimentExperiments_Project_Experiments_AggregateArgs =
  {
    distinct_on?: Maybe<Array<Experiments_Project_Experiments_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Experiments_Project_Experiments_Order_By>>;
    where?: Maybe<Experiments_Project_Experiments_Bool_Exp>;
  };

/** columns and relationships of "experiments_experiment" */
export type Experiments_ExperimentParts_Catalog_ExperimentnodesArgs = {
  distinct_on?: Maybe<Array<Parts_Catalog_Experimentnode_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parts_Catalog_Experimentnode_Order_By>>;
  where?: Maybe<Parts_Catalog_Experimentnode_Bool_Exp>;
};

/** columns and relationships of "experiments_experiment" */
export type Experiments_ExperimentParts_Catalog_Experimentnodes_AggregateArgs =
  {
    distinct_on?: Maybe<Array<Parts_Catalog_Experimentnode_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Parts_Catalog_Experimentnode_Order_By>>;
    where?: Maybe<Parts_Catalog_Experimentnode_Bool_Exp>;
  };

/** aggregated selection of "experiments_experiment" */
export type Experiments_Experiment_Aggregate = {
  __typename?: 'experiments_experiment_aggregate';
  aggregate?: Maybe<Experiments_Experiment_Aggregate_Fields>;
  nodes: Array<Experiments_Experiment>;
};

/** aggregate fields of "experiments_experiment" */
export type Experiments_Experiment_Aggregate_Fields = {
  __typename?: 'experiments_experiment_aggregate_fields';
  avg?: Maybe<Experiments_Experiment_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Experiments_Experiment_Max_Fields>;
  min?: Maybe<Experiments_Experiment_Min_Fields>;
  stddev?: Maybe<Experiments_Experiment_Stddev_Fields>;
  stddev_pop?: Maybe<Experiments_Experiment_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Experiments_Experiment_Stddev_Samp_Fields>;
  sum?: Maybe<Experiments_Experiment_Sum_Fields>;
  var_pop?: Maybe<Experiments_Experiment_Var_Pop_Fields>;
  var_samp?: Maybe<Experiments_Experiment_Var_Samp_Fields>;
  variance?: Maybe<Experiments_Experiment_Variance_Fields>;
};

/** aggregate fields of "experiments_experiment" */
export type Experiments_Experiment_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Experiments_Experiment_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "experiments_experiment" */
export type Experiments_Experiment_Aggregate_Order_By = {
  avg?: Maybe<Experiments_Experiment_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Experiments_Experiment_Max_Order_By>;
  min?: Maybe<Experiments_Experiment_Min_Order_By>;
  stddev?: Maybe<Experiments_Experiment_Stddev_Order_By>;
  stddev_pop?: Maybe<Experiments_Experiment_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Experiments_Experiment_Stddev_Samp_Order_By>;
  sum?: Maybe<Experiments_Experiment_Sum_Order_By>;
  var_pop?: Maybe<Experiments_Experiment_Var_Pop_Order_By>;
  var_samp?: Maybe<Experiments_Experiment_Var_Samp_Order_By>;
  variance?: Maybe<Experiments_Experiment_Variance_Order_By>;
};

/** columns and relationships of "experiments_experiment_analyses" */
export type Experiments_Experiment_Analyses = {
  __typename?: 'experiments_experiment_analyses';
  experiment_id: Scalars['uuid'];
  /** An object relationship */
  experiments_experiment: Experiments_Experiment;
  id: Scalars['Int'];
  /** An object relationship */
  measurement_taskuser: Measurement_Taskuser;
  taskuser_id: Scalars['uuid'];
};

/** aggregated selection of "experiments_experiment_analyses" */
export type Experiments_Experiment_Analyses_Aggregate = {
  __typename?: 'experiments_experiment_analyses_aggregate';
  aggregate?: Maybe<Experiments_Experiment_Analyses_Aggregate_Fields>;
  nodes: Array<Experiments_Experiment_Analyses>;
};

/** aggregate fields of "experiments_experiment_analyses" */
export type Experiments_Experiment_Analyses_Aggregate_Fields = {
  __typename?: 'experiments_experiment_analyses_aggregate_fields';
  avg?: Maybe<Experiments_Experiment_Analyses_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Experiments_Experiment_Analyses_Max_Fields>;
  min?: Maybe<Experiments_Experiment_Analyses_Min_Fields>;
  stddev?: Maybe<Experiments_Experiment_Analyses_Stddev_Fields>;
  stddev_pop?: Maybe<Experiments_Experiment_Analyses_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Experiments_Experiment_Analyses_Stddev_Samp_Fields>;
  sum?: Maybe<Experiments_Experiment_Analyses_Sum_Fields>;
  var_pop?: Maybe<Experiments_Experiment_Analyses_Var_Pop_Fields>;
  var_samp?: Maybe<Experiments_Experiment_Analyses_Var_Samp_Fields>;
  variance?: Maybe<Experiments_Experiment_Analyses_Variance_Fields>;
};

/** aggregate fields of "experiments_experiment_analyses" */
export type Experiments_Experiment_Analyses_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Experiments_Experiment_Analyses_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "experiments_experiment_analyses" */
export type Experiments_Experiment_Analyses_Aggregate_Order_By = {
  avg?: Maybe<Experiments_Experiment_Analyses_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Experiments_Experiment_Analyses_Max_Order_By>;
  min?: Maybe<Experiments_Experiment_Analyses_Min_Order_By>;
  stddev?: Maybe<Experiments_Experiment_Analyses_Stddev_Order_By>;
  stddev_pop?: Maybe<Experiments_Experiment_Analyses_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Experiments_Experiment_Analyses_Stddev_Samp_Order_By>;
  sum?: Maybe<Experiments_Experiment_Analyses_Sum_Order_By>;
  var_pop?: Maybe<Experiments_Experiment_Analyses_Var_Pop_Order_By>;
  var_samp?: Maybe<Experiments_Experiment_Analyses_Var_Samp_Order_By>;
  variance?: Maybe<Experiments_Experiment_Analyses_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "experiments_experiment_analyses" */
export type Experiments_Experiment_Analyses_Arr_Rel_Insert_Input = {
  data: Array<Experiments_Experiment_Analyses_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Experiments_Experiment_Analyses_On_Conflict>;
};

/** aggregate avg on columns */
export type Experiments_Experiment_Analyses_Avg_Fields = {
  __typename?: 'experiments_experiment_analyses_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "experiments_experiment_analyses" */
export type Experiments_Experiment_Analyses_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "experiments_experiment_analyses". All fields are combined with a logical 'AND'. */
export type Experiments_Experiment_Analyses_Bool_Exp = {
  _and?: Maybe<Array<Experiments_Experiment_Analyses_Bool_Exp>>;
  _not?: Maybe<Experiments_Experiment_Analyses_Bool_Exp>;
  _or?: Maybe<Array<Experiments_Experiment_Analyses_Bool_Exp>>;
  experiment_id?: Maybe<Uuid_Comparison_Exp>;
  experiments_experiment?: Maybe<Experiments_Experiment_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  measurement_taskuser?: Maybe<Measurement_Taskuser_Bool_Exp>;
  taskuser_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "experiments_experiment_analyses" */
export enum Experiments_Experiment_Analyses_Constraint {
  /** unique or primary key constraint */
  ExperimentsExperimentAExperimentIdTaskuserI_2bc67563Uniq = 'experiments_experiment_a_experiment_id_taskuser_i_2bc67563_uniq',
  /** unique or primary key constraint */
  ExperimentsExperimentAnalysesPkey = 'experiments_experiment_analyses_pkey',
}

/** input type for incrementing numeric columns in table "experiments_experiment_analyses" */
export type Experiments_Experiment_Analyses_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "experiments_experiment_analyses" */
export type Experiments_Experiment_Analyses_Insert_Input = {
  experiment_id?: Maybe<Scalars['uuid']>;
  experiments_experiment?: Maybe<Experiments_Experiment_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  measurement_taskuser?: Maybe<Measurement_Taskuser_Obj_Rel_Insert_Input>;
  taskuser_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Experiments_Experiment_Analyses_Max_Fields = {
  __typename?: 'experiments_experiment_analyses_max_fields';
  experiment_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['Int']>;
  taskuser_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "experiments_experiment_analyses" */
export type Experiments_Experiment_Analyses_Max_Order_By = {
  experiment_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  taskuser_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Experiments_Experiment_Analyses_Min_Fields = {
  __typename?: 'experiments_experiment_analyses_min_fields';
  experiment_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['Int']>;
  taskuser_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "experiments_experiment_analyses" */
export type Experiments_Experiment_Analyses_Min_Order_By = {
  experiment_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  taskuser_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "experiments_experiment_analyses" */
export type Experiments_Experiment_Analyses_Mutation_Response = {
  __typename?: 'experiments_experiment_analyses_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Experiments_Experiment_Analyses>;
};

/** on conflict condition type for table "experiments_experiment_analyses" */
export type Experiments_Experiment_Analyses_On_Conflict = {
  constraint: Experiments_Experiment_Analyses_Constraint;
  update_columns?: Array<Experiments_Experiment_Analyses_Update_Column>;
  where?: Maybe<Experiments_Experiment_Analyses_Bool_Exp>;
};

/** Ordering options when selecting data from "experiments_experiment_analyses". */
export type Experiments_Experiment_Analyses_Order_By = {
  experiment_id?: Maybe<Order_By>;
  experiments_experiment?: Maybe<Experiments_Experiment_Order_By>;
  id?: Maybe<Order_By>;
  measurement_taskuser?: Maybe<Measurement_Taskuser_Order_By>;
  taskuser_id?: Maybe<Order_By>;
};

/** primary key columns input for table: experiments_experiment_analyses */
export type Experiments_Experiment_Analyses_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "experiments_experiment_analyses" */
export enum Experiments_Experiment_Analyses_Select_Column {
  /** column name */
  ExperimentId = 'experiment_id',
  /** column name */
  Id = 'id',
  /** column name */
  TaskuserId = 'taskuser_id',
}

/** input type for updating data in table "experiments_experiment_analyses" */
export type Experiments_Experiment_Analyses_Set_Input = {
  experiment_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['Int']>;
  taskuser_id?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Experiments_Experiment_Analyses_Stddev_Fields = {
  __typename?: 'experiments_experiment_analyses_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "experiments_experiment_analyses" */
export type Experiments_Experiment_Analyses_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Experiments_Experiment_Analyses_Stddev_Pop_Fields = {
  __typename?: 'experiments_experiment_analyses_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "experiments_experiment_analyses" */
export type Experiments_Experiment_Analyses_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Experiments_Experiment_Analyses_Stddev_Samp_Fields = {
  __typename?: 'experiments_experiment_analyses_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "experiments_experiment_analyses" */
export type Experiments_Experiment_Analyses_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Experiments_Experiment_Analyses_Sum_Fields = {
  __typename?: 'experiments_experiment_analyses_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "experiments_experiment_analyses" */
export type Experiments_Experiment_Analyses_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "experiments_experiment_analyses" */
export enum Experiments_Experiment_Analyses_Update_Column {
  /** column name */
  ExperimentId = 'experiment_id',
  /** column name */
  Id = 'id',
  /** column name */
  TaskuserId = 'taskuser_id',
}

/** aggregate var_pop on columns */
export type Experiments_Experiment_Analyses_Var_Pop_Fields = {
  __typename?: 'experiments_experiment_analyses_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "experiments_experiment_analyses" */
export type Experiments_Experiment_Analyses_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Experiments_Experiment_Analyses_Var_Samp_Fields = {
  __typename?: 'experiments_experiment_analyses_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "experiments_experiment_analyses" */
export type Experiments_Experiment_Analyses_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Experiments_Experiment_Analyses_Variance_Fields = {
  __typename?: 'experiments_experiment_analyses_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "experiments_experiment_analyses" */
export type Experiments_Experiment_Analyses_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** input type for inserting array relation for remote table "experiments_experiment" */
export type Experiments_Experiment_Arr_Rel_Insert_Input = {
  data: Array<Experiments_Experiment_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Experiments_Experiment_On_Conflict>;
};

/** aggregate avg on columns */
export type Experiments_Experiment_Avg_Fields = {
  __typename?: 'experiments_experiment_avg_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "experiments_experiment" */
export type Experiments_Experiment_Avg_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "experiments_experiment". All fields are combined with a logical 'AND'. */
export type Experiments_Experiment_Bool_Exp = {
  _and?: Maybe<Array<Experiments_Experiment_Bool_Exp>>;
  _not?: Maybe<Experiments_Experiment_Bool_Exp>;
  _or?: Maybe<Array<Experiments_Experiment_Bool_Exp>>;
  benchling_id?: Maybe<String_Comparison_Exp>;
  chart?: Maybe<String_Comparison_Exp>;
  created_by_id?: Maybe<Int_Comparison_Exp>;
  date?: Maybe<Timestamptz_Comparison_Exp>;
  date_created?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  display_name?: Maybe<String_Comparison_Exp>;
  experiments_experiment_analyses?: Maybe<Experiments_Experiment_Analyses_Bool_Exp>;
  experiments_experiment_files?: Maybe<Experiments_Experiment_Files_Bool_Exp>;
  experiments_project_experiments?: Maybe<Experiments_Project_Experiments_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  integration_type?: Maybe<String_Comparison_Exp>;
  metadata?: Maybe<String_Comparison_Exp>;
  parts_catalog_experimentnodes?: Maybe<Parts_Catalog_Experimentnode_Bool_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  users_customuser?: Maybe<Users_Customuser_Bool_Exp>;
};

/** unique or primary key constraints on table "experiments_experiment" */
export enum Experiments_Experiment_Constraint {
  /** unique or primary key constraint */
  ExperimentsExperimentPkey = 'experiments_experiment_pkey',
}

/** columns and relationships of "experiments_experiment_files" */
export type Experiments_Experiment_Files = {
  __typename?: 'experiments_experiment_files';
  biofile_id: Scalars['uuid'];
  experiment_id: Scalars['uuid'];
  /** An object relationship */
  experiments_experiment: Experiments_Experiment;
  id: Scalars['Int'];
  /** An object relationship */
  measurement_biofile: Measurement_Biofile;
};

/** aggregated selection of "experiments_experiment_files" */
export type Experiments_Experiment_Files_Aggregate = {
  __typename?: 'experiments_experiment_files_aggregate';
  aggregate?: Maybe<Experiments_Experiment_Files_Aggregate_Fields>;
  nodes: Array<Experiments_Experiment_Files>;
};

/** aggregate fields of "experiments_experiment_files" */
export type Experiments_Experiment_Files_Aggregate_Fields = {
  __typename?: 'experiments_experiment_files_aggregate_fields';
  avg?: Maybe<Experiments_Experiment_Files_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Experiments_Experiment_Files_Max_Fields>;
  min?: Maybe<Experiments_Experiment_Files_Min_Fields>;
  stddev?: Maybe<Experiments_Experiment_Files_Stddev_Fields>;
  stddev_pop?: Maybe<Experiments_Experiment_Files_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Experiments_Experiment_Files_Stddev_Samp_Fields>;
  sum?: Maybe<Experiments_Experiment_Files_Sum_Fields>;
  var_pop?: Maybe<Experiments_Experiment_Files_Var_Pop_Fields>;
  var_samp?: Maybe<Experiments_Experiment_Files_Var_Samp_Fields>;
  variance?: Maybe<Experiments_Experiment_Files_Variance_Fields>;
};

/** aggregate fields of "experiments_experiment_files" */
export type Experiments_Experiment_Files_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Experiments_Experiment_Files_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "experiments_experiment_files" */
export type Experiments_Experiment_Files_Aggregate_Order_By = {
  avg?: Maybe<Experiments_Experiment_Files_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Experiments_Experiment_Files_Max_Order_By>;
  min?: Maybe<Experiments_Experiment_Files_Min_Order_By>;
  stddev?: Maybe<Experiments_Experiment_Files_Stddev_Order_By>;
  stddev_pop?: Maybe<Experiments_Experiment_Files_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Experiments_Experiment_Files_Stddev_Samp_Order_By>;
  sum?: Maybe<Experiments_Experiment_Files_Sum_Order_By>;
  var_pop?: Maybe<Experiments_Experiment_Files_Var_Pop_Order_By>;
  var_samp?: Maybe<Experiments_Experiment_Files_Var_Samp_Order_By>;
  variance?: Maybe<Experiments_Experiment_Files_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "experiments_experiment_files" */
export type Experiments_Experiment_Files_Arr_Rel_Insert_Input = {
  data: Array<Experiments_Experiment_Files_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Experiments_Experiment_Files_On_Conflict>;
};

/** aggregate avg on columns */
export type Experiments_Experiment_Files_Avg_Fields = {
  __typename?: 'experiments_experiment_files_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "experiments_experiment_files" */
export type Experiments_Experiment_Files_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "experiments_experiment_files". All fields are combined with a logical 'AND'. */
export type Experiments_Experiment_Files_Bool_Exp = {
  _and?: Maybe<Array<Experiments_Experiment_Files_Bool_Exp>>;
  _not?: Maybe<Experiments_Experiment_Files_Bool_Exp>;
  _or?: Maybe<Array<Experiments_Experiment_Files_Bool_Exp>>;
  biofile_id?: Maybe<Uuid_Comparison_Exp>;
  experiment_id?: Maybe<Uuid_Comparison_Exp>;
  experiments_experiment?: Maybe<Experiments_Experiment_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  measurement_biofile?: Maybe<Measurement_Biofile_Bool_Exp>;
};

/** unique or primary key constraints on table "experiments_experiment_files" */
export enum Experiments_Experiment_Files_Constraint {
  /** unique or primary key constraint */
  ExperimentsExperimentFExperimentIdBiofileId_9bc9a351Uniq = 'experiments_experiment_f_experiment_id_biofile_id_9bc9a351_uniq',
  /** unique or primary key constraint */
  ExperimentsExperimentFilesPkey = 'experiments_experiment_files_pkey',
}

/** input type for incrementing numeric columns in table "experiments_experiment_files" */
export type Experiments_Experiment_Files_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "experiments_experiment_files" */
export type Experiments_Experiment_Files_Insert_Input = {
  biofile_id?: Maybe<Scalars['uuid']>;
  experiment_id?: Maybe<Scalars['uuid']>;
  experiments_experiment?: Maybe<Experiments_Experiment_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  measurement_biofile?: Maybe<Measurement_Biofile_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Experiments_Experiment_Files_Max_Fields = {
  __typename?: 'experiments_experiment_files_max_fields';
  biofile_id?: Maybe<Scalars['uuid']>;
  experiment_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "experiments_experiment_files" */
export type Experiments_Experiment_Files_Max_Order_By = {
  biofile_id?: Maybe<Order_By>;
  experiment_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Experiments_Experiment_Files_Min_Fields = {
  __typename?: 'experiments_experiment_files_min_fields';
  biofile_id?: Maybe<Scalars['uuid']>;
  experiment_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "experiments_experiment_files" */
export type Experiments_Experiment_Files_Min_Order_By = {
  biofile_id?: Maybe<Order_By>;
  experiment_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** response of any mutation on the table "experiments_experiment_files" */
export type Experiments_Experiment_Files_Mutation_Response = {
  __typename?: 'experiments_experiment_files_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Experiments_Experiment_Files>;
};

/** on conflict condition type for table "experiments_experiment_files" */
export type Experiments_Experiment_Files_On_Conflict = {
  constraint: Experiments_Experiment_Files_Constraint;
  update_columns?: Array<Experiments_Experiment_Files_Update_Column>;
  where?: Maybe<Experiments_Experiment_Files_Bool_Exp>;
};

/** Ordering options when selecting data from "experiments_experiment_files". */
export type Experiments_Experiment_Files_Order_By = {
  biofile_id?: Maybe<Order_By>;
  experiment_id?: Maybe<Order_By>;
  experiments_experiment?: Maybe<Experiments_Experiment_Order_By>;
  id?: Maybe<Order_By>;
  measurement_biofile?: Maybe<Measurement_Biofile_Order_By>;
};

/** primary key columns input for table: experiments_experiment_files */
export type Experiments_Experiment_Files_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "experiments_experiment_files" */
export enum Experiments_Experiment_Files_Select_Column {
  /** column name */
  BiofileId = 'biofile_id',
  /** column name */
  ExperimentId = 'experiment_id',
  /** column name */
  Id = 'id',
}

/** input type for updating data in table "experiments_experiment_files" */
export type Experiments_Experiment_Files_Set_Input = {
  biofile_id?: Maybe<Scalars['uuid']>;
  experiment_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Experiments_Experiment_Files_Stddev_Fields = {
  __typename?: 'experiments_experiment_files_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "experiments_experiment_files" */
export type Experiments_Experiment_Files_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Experiments_Experiment_Files_Stddev_Pop_Fields = {
  __typename?: 'experiments_experiment_files_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "experiments_experiment_files" */
export type Experiments_Experiment_Files_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Experiments_Experiment_Files_Stddev_Samp_Fields = {
  __typename?: 'experiments_experiment_files_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "experiments_experiment_files" */
export type Experiments_Experiment_Files_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Experiments_Experiment_Files_Sum_Fields = {
  __typename?: 'experiments_experiment_files_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "experiments_experiment_files" */
export type Experiments_Experiment_Files_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "experiments_experiment_files" */
export enum Experiments_Experiment_Files_Update_Column {
  /** column name */
  BiofileId = 'biofile_id',
  /** column name */
  ExperimentId = 'experiment_id',
  /** column name */
  Id = 'id',
}

/** aggregate var_pop on columns */
export type Experiments_Experiment_Files_Var_Pop_Fields = {
  __typename?: 'experiments_experiment_files_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "experiments_experiment_files" */
export type Experiments_Experiment_Files_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Experiments_Experiment_Files_Var_Samp_Fields = {
  __typename?: 'experiments_experiment_files_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "experiments_experiment_files" */
export type Experiments_Experiment_Files_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Experiments_Experiment_Files_Variance_Fields = {
  __typename?: 'experiments_experiment_files_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "experiments_experiment_files" */
export type Experiments_Experiment_Files_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** input type for incrementing numeric columns in table "experiments_experiment" */
export type Experiments_Experiment_Inc_Input = {
  created_by_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "experiments_experiment" */
export type Experiments_Experiment_Insert_Input = {
  benchling_id?: Maybe<Scalars['String']>;
  chart?: Maybe<Scalars['String']>;
  created_by_id?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['timestamptz']>;
  date_created?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  experiments_experiment_analyses?: Maybe<Experiments_Experiment_Analyses_Arr_Rel_Insert_Input>;
  experiments_experiment_files?: Maybe<Experiments_Experiment_Files_Arr_Rel_Insert_Input>;
  experiments_project_experiments?: Maybe<Experiments_Project_Experiments_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  integration_type?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['String']>;
  parts_catalog_experimentnodes?: Maybe<Parts_Catalog_Experimentnode_Arr_Rel_Insert_Input>;
  type?: Maybe<Scalars['String']>;
  users_customuser?: Maybe<Users_Customuser_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Experiments_Experiment_Max_Fields = {
  __typename?: 'experiments_experiment_max_fields';
  benchling_id?: Maybe<Scalars['String']>;
  chart?: Maybe<Scalars['String']>;
  created_by_id?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['timestamptz']>;
  date_created?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  integration_type?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "experiments_experiment" */
export type Experiments_Experiment_Max_Order_By = {
  benchling_id?: Maybe<Order_By>;
  chart?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  date?: Maybe<Order_By>;
  date_created?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  integration_type?: Maybe<Order_By>;
  metadata?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Experiments_Experiment_Min_Fields = {
  __typename?: 'experiments_experiment_min_fields';
  benchling_id?: Maybe<Scalars['String']>;
  chart?: Maybe<Scalars['String']>;
  created_by_id?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['timestamptz']>;
  date_created?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  integration_type?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "experiments_experiment" */
export type Experiments_Experiment_Min_Order_By = {
  benchling_id?: Maybe<Order_By>;
  chart?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  date?: Maybe<Order_By>;
  date_created?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  integration_type?: Maybe<Order_By>;
  metadata?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** response of any mutation on the table "experiments_experiment" */
export type Experiments_Experiment_Mutation_Response = {
  __typename?: 'experiments_experiment_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Experiments_Experiment>;
};

/** input type for inserting object relation for remote table "experiments_experiment" */
export type Experiments_Experiment_Obj_Rel_Insert_Input = {
  data: Experiments_Experiment_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Experiments_Experiment_On_Conflict>;
};

/** on conflict condition type for table "experiments_experiment" */
export type Experiments_Experiment_On_Conflict = {
  constraint: Experiments_Experiment_Constraint;
  update_columns?: Array<Experiments_Experiment_Update_Column>;
  where?: Maybe<Experiments_Experiment_Bool_Exp>;
};

/** Ordering options when selecting data from "experiments_experiment". */
export type Experiments_Experiment_Order_By = {
  benchling_id?: Maybe<Order_By>;
  chart?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  date?: Maybe<Order_By>;
  date_created?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  experiments_experiment_analyses_aggregate?: Maybe<Experiments_Experiment_Analyses_Aggregate_Order_By>;
  experiments_experiment_files_aggregate?: Maybe<Experiments_Experiment_Files_Aggregate_Order_By>;
  experiments_project_experiments_aggregate?: Maybe<Experiments_Project_Experiments_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  integration_type?: Maybe<Order_By>;
  metadata?: Maybe<Order_By>;
  parts_catalog_experimentnodes_aggregate?: Maybe<Parts_Catalog_Experimentnode_Aggregate_Order_By>;
  type?: Maybe<Order_By>;
  users_customuser?: Maybe<Users_Customuser_Order_By>;
};

/** primary key columns input for table: experiments_experiment */
export type Experiments_Experiment_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "experiments_experiment" */
export enum Experiments_Experiment_Select_Column {
  /** column name */
  BenchlingId = 'benchling_id',
  /** column name */
  Chart = 'chart',
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  Date = 'date',
  /** column name */
  DateCreated = 'date_created',
  /** column name */
  Description = 'description',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Id = 'id',
  /** column name */
  IntegrationType = 'integration_type',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  Type = 'type',
}

/** input type for updating data in table "experiments_experiment" */
export type Experiments_Experiment_Set_Input = {
  benchling_id?: Maybe<Scalars['String']>;
  chart?: Maybe<Scalars['String']>;
  created_by_id?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['timestamptz']>;
  date_created?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  integration_type?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Experiments_Experiment_Stddev_Fields = {
  __typename?: 'experiments_experiment_stddev_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "experiments_experiment" */
export type Experiments_Experiment_Stddev_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Experiments_Experiment_Stddev_Pop_Fields = {
  __typename?: 'experiments_experiment_stddev_pop_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "experiments_experiment" */
export type Experiments_Experiment_Stddev_Pop_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Experiments_Experiment_Stddev_Samp_Fields = {
  __typename?: 'experiments_experiment_stddev_samp_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "experiments_experiment" */
export type Experiments_Experiment_Stddev_Samp_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Experiments_Experiment_Sum_Fields = {
  __typename?: 'experiments_experiment_sum_fields';
  created_by_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "experiments_experiment" */
export type Experiments_Experiment_Sum_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** update columns of table "experiments_experiment" */
export enum Experiments_Experiment_Update_Column {
  /** column name */
  BenchlingId = 'benchling_id',
  /** column name */
  Chart = 'chart',
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  Date = 'date',
  /** column name */
  DateCreated = 'date_created',
  /** column name */
  Description = 'description',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Id = 'id',
  /** column name */
  IntegrationType = 'integration_type',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  Type = 'type',
}

/** aggregate var_pop on columns */
export type Experiments_Experiment_Var_Pop_Fields = {
  __typename?: 'experiments_experiment_var_pop_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "experiments_experiment" */
export type Experiments_Experiment_Var_Pop_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Experiments_Experiment_Var_Samp_Fields = {
  __typename?: 'experiments_experiment_var_samp_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "experiments_experiment" */
export type Experiments_Experiment_Var_Samp_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Experiments_Experiment_Variance_Fields = {
  __typename?: 'experiments_experiment_variance_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "experiments_experiment" */
export type Experiments_Experiment_Variance_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** columns and relationships of "experiments_figure" */
export type Experiments_Figure = {
  __typename?: 'experiments_figure';
  chart: Scalars['String'];
  created_by_id?: Maybe<Scalars['Int']>;
  date_created: Scalars['timestamptz'];
  description: Scalars['String'];
  display_name: Scalars['String'];
  /** An object relationship */
  experiments_project: Experiments_Project;
  id: Scalars['uuid'];
  order: Scalars['Int'];
  project_id: Scalars['uuid'];
  /** An object relationship */
  users_customuser?: Maybe<Users_Customuser>;
};

/** aggregated selection of "experiments_figure" */
export type Experiments_Figure_Aggregate = {
  __typename?: 'experiments_figure_aggregate';
  aggregate?: Maybe<Experiments_Figure_Aggregate_Fields>;
  nodes: Array<Experiments_Figure>;
};

/** aggregate fields of "experiments_figure" */
export type Experiments_Figure_Aggregate_Fields = {
  __typename?: 'experiments_figure_aggregate_fields';
  avg?: Maybe<Experiments_Figure_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Experiments_Figure_Max_Fields>;
  min?: Maybe<Experiments_Figure_Min_Fields>;
  stddev?: Maybe<Experiments_Figure_Stddev_Fields>;
  stddev_pop?: Maybe<Experiments_Figure_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Experiments_Figure_Stddev_Samp_Fields>;
  sum?: Maybe<Experiments_Figure_Sum_Fields>;
  var_pop?: Maybe<Experiments_Figure_Var_Pop_Fields>;
  var_samp?: Maybe<Experiments_Figure_Var_Samp_Fields>;
  variance?: Maybe<Experiments_Figure_Variance_Fields>;
};

/** aggregate fields of "experiments_figure" */
export type Experiments_Figure_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Experiments_Figure_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "experiments_figure" */
export type Experiments_Figure_Aggregate_Order_By = {
  avg?: Maybe<Experiments_Figure_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Experiments_Figure_Max_Order_By>;
  min?: Maybe<Experiments_Figure_Min_Order_By>;
  stddev?: Maybe<Experiments_Figure_Stddev_Order_By>;
  stddev_pop?: Maybe<Experiments_Figure_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Experiments_Figure_Stddev_Samp_Order_By>;
  sum?: Maybe<Experiments_Figure_Sum_Order_By>;
  var_pop?: Maybe<Experiments_Figure_Var_Pop_Order_By>;
  var_samp?: Maybe<Experiments_Figure_Var_Samp_Order_By>;
  variance?: Maybe<Experiments_Figure_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "experiments_figure" */
export type Experiments_Figure_Arr_Rel_Insert_Input = {
  data: Array<Experiments_Figure_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Experiments_Figure_On_Conflict>;
};

/** aggregate avg on columns */
export type Experiments_Figure_Avg_Fields = {
  __typename?: 'experiments_figure_avg_fields';
  created_by_id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "experiments_figure" */
export type Experiments_Figure_Avg_Order_By = {
  created_by_id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "experiments_figure". All fields are combined with a logical 'AND'. */
export type Experiments_Figure_Bool_Exp = {
  _and?: Maybe<Array<Experiments_Figure_Bool_Exp>>;
  _not?: Maybe<Experiments_Figure_Bool_Exp>;
  _or?: Maybe<Array<Experiments_Figure_Bool_Exp>>;
  chart?: Maybe<String_Comparison_Exp>;
  created_by_id?: Maybe<Int_Comparison_Exp>;
  date_created?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  display_name?: Maybe<String_Comparison_Exp>;
  experiments_project?: Maybe<Experiments_Project_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  order?: Maybe<Int_Comparison_Exp>;
  project_id?: Maybe<Uuid_Comparison_Exp>;
  users_customuser?: Maybe<Users_Customuser_Bool_Exp>;
};

/** unique or primary key constraints on table "experiments_figure" */
export enum Experiments_Figure_Constraint {
  /** unique or primary key constraint */
  ExperimentsCasestudyPkey = 'experiments_casestudy_pkey',
}

/** input type for incrementing numeric columns in table "experiments_figure" */
export type Experiments_Figure_Inc_Input = {
  created_by_id?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "experiments_figure" */
export type Experiments_Figure_Insert_Input = {
  chart?: Maybe<Scalars['String']>;
  created_by_id?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  experiments_project?: Maybe<Experiments_Project_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
  project_id?: Maybe<Scalars['uuid']>;
  users_customuser?: Maybe<Users_Customuser_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Experiments_Figure_Max_Fields = {
  __typename?: 'experiments_figure_max_fields';
  chart?: Maybe<Scalars['String']>;
  created_by_id?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
  project_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "experiments_figure" */
export type Experiments_Figure_Max_Order_By = {
  chart?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  date_created?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Experiments_Figure_Min_Fields = {
  __typename?: 'experiments_figure_min_fields';
  chart?: Maybe<Scalars['String']>;
  created_by_id?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
  project_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "experiments_figure" */
export type Experiments_Figure_Min_Order_By = {
  chart?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  date_created?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "experiments_figure" */
export type Experiments_Figure_Mutation_Response = {
  __typename?: 'experiments_figure_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Experiments_Figure>;
};

/** on conflict condition type for table "experiments_figure" */
export type Experiments_Figure_On_Conflict = {
  constraint: Experiments_Figure_Constraint;
  update_columns?: Array<Experiments_Figure_Update_Column>;
  where?: Maybe<Experiments_Figure_Bool_Exp>;
};

/** Ordering options when selecting data from "experiments_figure". */
export type Experiments_Figure_Order_By = {
  chart?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  date_created?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  experiments_project?: Maybe<Experiments_Project_Order_By>;
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
  users_customuser?: Maybe<Users_Customuser_Order_By>;
};

/** primary key columns input for table: experiments_figure */
export type Experiments_Figure_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "experiments_figure" */
export enum Experiments_Figure_Select_Column {
  /** column name */
  Chart = 'chart',
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  DateCreated = 'date_created',
  /** column name */
  Description = 'description',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  ProjectId = 'project_id',
}

/** input type for updating data in table "experiments_figure" */
export type Experiments_Figure_Set_Input = {
  chart?: Maybe<Scalars['String']>;
  created_by_id?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Scalars['Int']>;
  project_id?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Experiments_Figure_Stddev_Fields = {
  __typename?: 'experiments_figure_stddev_fields';
  created_by_id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "experiments_figure" */
export type Experiments_Figure_Stddev_Order_By = {
  created_by_id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Experiments_Figure_Stddev_Pop_Fields = {
  __typename?: 'experiments_figure_stddev_pop_fields';
  created_by_id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "experiments_figure" */
export type Experiments_Figure_Stddev_Pop_Order_By = {
  created_by_id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Experiments_Figure_Stddev_Samp_Fields = {
  __typename?: 'experiments_figure_stddev_samp_fields';
  created_by_id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "experiments_figure" */
export type Experiments_Figure_Stddev_Samp_Order_By = {
  created_by_id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Experiments_Figure_Sum_Fields = {
  __typename?: 'experiments_figure_sum_fields';
  created_by_id?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "experiments_figure" */
export type Experiments_Figure_Sum_Order_By = {
  created_by_id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

/** update columns of table "experiments_figure" */
export enum Experiments_Figure_Update_Column {
  /** column name */
  Chart = 'chart',
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  DateCreated = 'date_created',
  /** column name */
  Description = 'description',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  ProjectId = 'project_id',
}

/** aggregate var_pop on columns */
export type Experiments_Figure_Var_Pop_Fields = {
  __typename?: 'experiments_figure_var_pop_fields';
  created_by_id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "experiments_figure" */
export type Experiments_Figure_Var_Pop_Order_By = {
  created_by_id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Experiments_Figure_Var_Samp_Fields = {
  __typename?: 'experiments_figure_var_samp_fields';
  created_by_id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "experiments_figure" */
export type Experiments_Figure_Var_Samp_Order_By = {
  created_by_id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Experiments_Figure_Variance_Fields = {
  __typename?: 'experiments_figure_variance_fields';
  created_by_id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "experiments_figure" */
export type Experiments_Figure_Variance_Order_By = {
  created_by_id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

/** columns and relationships of "experiments_project" */
export type Experiments_Project = {
  __typename?: 'experiments_project';
  created_by_id?: Maybe<Scalars['Int']>;
  date_created: Scalars['timestamptz'];
  description: Scalars['String'];
  display_name: Scalars['String'];
  /** An array relationship */
  experiments_figures: Array<Experiments_Figure>;
  /** An aggregate relationship */
  experiments_figures_aggregate: Experiments_Figure_Aggregate;
  /** fetch data from the table: "experiments_project_experiments" */
  experiments_project_experiments: Array<Experiments_Project_Experiments>;
  /** An aggregate relationship */
  experiments_project_experiments_aggregate: Experiments_Project_Experiments_Aggregate;
  /** An array relationship */
  experiments_project_nodes: Array<Experiments_Project_Nodes>;
  /** An aggregate relationship */
  experiments_project_nodes_aggregate: Experiments_Project_Nodes_Aggregate;
  id: Scalars['uuid'];
  metadata: Scalars['String'];
  /** An object relationship */
  users_customuser?: Maybe<Users_Customuser>;
};

/** columns and relationships of "experiments_project" */
export type Experiments_ProjectExperiments_FiguresArgs = {
  distinct_on?: Maybe<Array<Experiments_Figure_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Figure_Order_By>>;
  where?: Maybe<Experiments_Figure_Bool_Exp>;
};

/** columns and relationships of "experiments_project" */
export type Experiments_ProjectExperiments_Figures_AggregateArgs = {
  distinct_on?: Maybe<Array<Experiments_Figure_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Figure_Order_By>>;
  where?: Maybe<Experiments_Figure_Bool_Exp>;
};

/** columns and relationships of "experiments_project" */
export type Experiments_ProjectExperiments_Project_ExperimentsArgs = {
  distinct_on?: Maybe<Array<Experiments_Project_Experiments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Project_Experiments_Order_By>>;
  where?: Maybe<Experiments_Project_Experiments_Bool_Exp>;
};

/** columns and relationships of "experiments_project" */
export type Experiments_ProjectExperiments_Project_Experiments_AggregateArgs = {
  distinct_on?: Maybe<Array<Experiments_Project_Experiments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Project_Experiments_Order_By>>;
  where?: Maybe<Experiments_Project_Experiments_Bool_Exp>;
};

/** columns and relationships of "experiments_project" */
export type Experiments_ProjectExperiments_Project_NodesArgs = {
  distinct_on?: Maybe<Array<Experiments_Project_Nodes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Project_Nodes_Order_By>>;
  where?: Maybe<Experiments_Project_Nodes_Bool_Exp>;
};

/** columns and relationships of "experiments_project" */
export type Experiments_ProjectExperiments_Project_Nodes_AggregateArgs = {
  distinct_on?: Maybe<Array<Experiments_Project_Nodes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Project_Nodes_Order_By>>;
  where?: Maybe<Experiments_Project_Nodes_Bool_Exp>;
};

/** aggregated selection of "experiments_project" */
export type Experiments_Project_Aggregate = {
  __typename?: 'experiments_project_aggregate';
  aggregate?: Maybe<Experiments_Project_Aggregate_Fields>;
  nodes: Array<Experiments_Project>;
};

/** aggregate fields of "experiments_project" */
export type Experiments_Project_Aggregate_Fields = {
  __typename?: 'experiments_project_aggregate_fields';
  avg?: Maybe<Experiments_Project_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Experiments_Project_Max_Fields>;
  min?: Maybe<Experiments_Project_Min_Fields>;
  stddev?: Maybe<Experiments_Project_Stddev_Fields>;
  stddev_pop?: Maybe<Experiments_Project_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Experiments_Project_Stddev_Samp_Fields>;
  sum?: Maybe<Experiments_Project_Sum_Fields>;
  var_pop?: Maybe<Experiments_Project_Var_Pop_Fields>;
  var_samp?: Maybe<Experiments_Project_Var_Samp_Fields>;
  variance?: Maybe<Experiments_Project_Variance_Fields>;
};

/** aggregate fields of "experiments_project" */
export type Experiments_Project_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Experiments_Project_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "experiments_project" */
export type Experiments_Project_Aggregate_Order_By = {
  avg?: Maybe<Experiments_Project_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Experiments_Project_Max_Order_By>;
  min?: Maybe<Experiments_Project_Min_Order_By>;
  stddev?: Maybe<Experiments_Project_Stddev_Order_By>;
  stddev_pop?: Maybe<Experiments_Project_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Experiments_Project_Stddev_Samp_Order_By>;
  sum?: Maybe<Experiments_Project_Sum_Order_By>;
  var_pop?: Maybe<Experiments_Project_Var_Pop_Order_By>;
  var_samp?: Maybe<Experiments_Project_Var_Samp_Order_By>;
  variance?: Maybe<Experiments_Project_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "experiments_project" */
export type Experiments_Project_Arr_Rel_Insert_Input = {
  data: Array<Experiments_Project_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Experiments_Project_On_Conflict>;
};

/** aggregate avg on columns */
export type Experiments_Project_Avg_Fields = {
  __typename?: 'experiments_project_avg_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "experiments_project" */
export type Experiments_Project_Avg_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "experiments_project". All fields are combined with a logical 'AND'. */
export type Experiments_Project_Bool_Exp = {
  _and?: Maybe<Array<Experiments_Project_Bool_Exp>>;
  _not?: Maybe<Experiments_Project_Bool_Exp>;
  _or?: Maybe<Array<Experiments_Project_Bool_Exp>>;
  created_by_id?: Maybe<Int_Comparison_Exp>;
  date_created?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  display_name?: Maybe<String_Comparison_Exp>;
  experiments_figures?: Maybe<Experiments_Figure_Bool_Exp>;
  experiments_project_experiments?: Maybe<Experiments_Project_Experiments_Bool_Exp>;
  experiments_project_nodes?: Maybe<Experiments_Project_Nodes_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  metadata?: Maybe<String_Comparison_Exp>;
  users_customuser?: Maybe<Users_Customuser_Bool_Exp>;
};

/** unique or primary key constraints on table "experiments_project" */
export enum Experiments_Project_Constraint {
  /** unique or primary key constraint */
  ExperimentsProjectPkey = 'experiments_project_pkey',
}

/** columns and relationships of "experiments_project_experiments" */
export type Experiments_Project_Experiments = {
  __typename?: 'experiments_project_experiments';
  experiment_id: Scalars['uuid'];
  /** An object relationship */
  experiments_experiment: Experiments_Experiment;
  /** An object relationship */
  experiments_project: Experiments_Project;
  id: Scalars['Int'];
  project_id: Scalars['uuid'];
};

/** aggregated selection of "experiments_project_experiments" */
export type Experiments_Project_Experiments_Aggregate = {
  __typename?: 'experiments_project_experiments_aggregate';
  aggregate?: Maybe<Experiments_Project_Experiments_Aggregate_Fields>;
  nodes: Array<Experiments_Project_Experiments>;
};

/** aggregate fields of "experiments_project_experiments" */
export type Experiments_Project_Experiments_Aggregate_Fields = {
  __typename?: 'experiments_project_experiments_aggregate_fields';
  avg?: Maybe<Experiments_Project_Experiments_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Experiments_Project_Experiments_Max_Fields>;
  min?: Maybe<Experiments_Project_Experiments_Min_Fields>;
  stddev?: Maybe<Experiments_Project_Experiments_Stddev_Fields>;
  stddev_pop?: Maybe<Experiments_Project_Experiments_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Experiments_Project_Experiments_Stddev_Samp_Fields>;
  sum?: Maybe<Experiments_Project_Experiments_Sum_Fields>;
  var_pop?: Maybe<Experiments_Project_Experiments_Var_Pop_Fields>;
  var_samp?: Maybe<Experiments_Project_Experiments_Var_Samp_Fields>;
  variance?: Maybe<Experiments_Project_Experiments_Variance_Fields>;
};

/** aggregate fields of "experiments_project_experiments" */
export type Experiments_Project_Experiments_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Experiments_Project_Experiments_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "experiments_project_experiments" */
export type Experiments_Project_Experiments_Aggregate_Order_By = {
  avg?: Maybe<Experiments_Project_Experiments_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Experiments_Project_Experiments_Max_Order_By>;
  min?: Maybe<Experiments_Project_Experiments_Min_Order_By>;
  stddev?: Maybe<Experiments_Project_Experiments_Stddev_Order_By>;
  stddev_pop?: Maybe<Experiments_Project_Experiments_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Experiments_Project_Experiments_Stddev_Samp_Order_By>;
  sum?: Maybe<Experiments_Project_Experiments_Sum_Order_By>;
  var_pop?: Maybe<Experiments_Project_Experiments_Var_Pop_Order_By>;
  var_samp?: Maybe<Experiments_Project_Experiments_Var_Samp_Order_By>;
  variance?: Maybe<Experiments_Project_Experiments_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "experiments_project_experiments" */
export type Experiments_Project_Experiments_Arr_Rel_Insert_Input = {
  data: Array<Experiments_Project_Experiments_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Experiments_Project_Experiments_On_Conflict>;
};

/** aggregate avg on columns */
export type Experiments_Project_Experiments_Avg_Fields = {
  __typename?: 'experiments_project_experiments_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "experiments_project_experiments" */
export type Experiments_Project_Experiments_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "experiments_project_experiments". All fields are combined with a logical 'AND'. */
export type Experiments_Project_Experiments_Bool_Exp = {
  _and?: Maybe<Array<Experiments_Project_Experiments_Bool_Exp>>;
  _not?: Maybe<Experiments_Project_Experiments_Bool_Exp>;
  _or?: Maybe<Array<Experiments_Project_Experiments_Bool_Exp>>;
  experiment_id?: Maybe<Uuid_Comparison_Exp>;
  experiments_experiment?: Maybe<Experiments_Experiment_Bool_Exp>;
  experiments_project?: Maybe<Experiments_Project_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  project_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "experiments_project_experiments" */
export enum Experiments_Project_Experiments_Constraint {
  /** unique or primary key constraint */
  ExperimentsProjectExpeProjectIdExperimentIdA817c4f2Uniq = 'experiments_project_expe_project_id_experiment_id_a817c4f2_uniq',
  /** unique or primary key constraint */
  ExperimentsProjectExperimentsPkey = 'experiments_project_experiments_pkey',
}

/** input type for incrementing numeric columns in table "experiments_project_experiments" */
export type Experiments_Project_Experiments_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "experiments_project_experiments" */
export type Experiments_Project_Experiments_Insert_Input = {
  experiment_id?: Maybe<Scalars['uuid']>;
  experiments_experiment?: Maybe<Experiments_Experiment_Obj_Rel_Insert_Input>;
  experiments_project?: Maybe<Experiments_Project_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  project_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Experiments_Project_Experiments_Max_Fields = {
  __typename?: 'experiments_project_experiments_max_fields';
  experiment_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['Int']>;
  project_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "experiments_project_experiments" */
export type Experiments_Project_Experiments_Max_Order_By = {
  experiment_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Experiments_Project_Experiments_Min_Fields = {
  __typename?: 'experiments_project_experiments_min_fields';
  experiment_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['Int']>;
  project_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "experiments_project_experiments" */
export type Experiments_Project_Experiments_Min_Order_By = {
  experiment_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "experiments_project_experiments" */
export type Experiments_Project_Experiments_Mutation_Response = {
  __typename?: 'experiments_project_experiments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Experiments_Project_Experiments>;
};

/** on conflict condition type for table "experiments_project_experiments" */
export type Experiments_Project_Experiments_On_Conflict = {
  constraint: Experiments_Project_Experiments_Constraint;
  update_columns?: Array<Experiments_Project_Experiments_Update_Column>;
  where?: Maybe<Experiments_Project_Experiments_Bool_Exp>;
};

/** Ordering options when selecting data from "experiments_project_experiments". */
export type Experiments_Project_Experiments_Order_By = {
  experiment_id?: Maybe<Order_By>;
  experiments_experiment?: Maybe<Experiments_Experiment_Order_By>;
  experiments_project?: Maybe<Experiments_Project_Order_By>;
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

/** primary key columns input for table: experiments_project_experiments */
export type Experiments_Project_Experiments_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "experiments_project_experiments" */
export enum Experiments_Project_Experiments_Select_Column {
  /** column name */
  ExperimentId = 'experiment_id',
  /** column name */
  Id = 'id',
  /** column name */
  ProjectId = 'project_id',
}

/** input type for updating data in table "experiments_project_experiments" */
export type Experiments_Project_Experiments_Set_Input = {
  experiment_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['Int']>;
  project_id?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Experiments_Project_Experiments_Stddev_Fields = {
  __typename?: 'experiments_project_experiments_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "experiments_project_experiments" */
export type Experiments_Project_Experiments_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Experiments_Project_Experiments_Stddev_Pop_Fields = {
  __typename?: 'experiments_project_experiments_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "experiments_project_experiments" */
export type Experiments_Project_Experiments_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Experiments_Project_Experiments_Stddev_Samp_Fields = {
  __typename?: 'experiments_project_experiments_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "experiments_project_experiments" */
export type Experiments_Project_Experiments_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Experiments_Project_Experiments_Sum_Fields = {
  __typename?: 'experiments_project_experiments_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "experiments_project_experiments" */
export type Experiments_Project_Experiments_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "experiments_project_experiments" */
export enum Experiments_Project_Experiments_Update_Column {
  /** column name */
  ExperimentId = 'experiment_id',
  /** column name */
  Id = 'id',
  /** column name */
  ProjectId = 'project_id',
}

/** aggregate var_pop on columns */
export type Experiments_Project_Experiments_Var_Pop_Fields = {
  __typename?: 'experiments_project_experiments_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "experiments_project_experiments" */
export type Experiments_Project_Experiments_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Experiments_Project_Experiments_Var_Samp_Fields = {
  __typename?: 'experiments_project_experiments_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "experiments_project_experiments" */
export type Experiments_Project_Experiments_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Experiments_Project_Experiments_Variance_Fields = {
  __typename?: 'experiments_project_experiments_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "experiments_project_experiments" */
export type Experiments_Project_Experiments_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** input type for incrementing numeric columns in table "experiments_project" */
export type Experiments_Project_Inc_Input = {
  created_by_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "experiments_project" */
export type Experiments_Project_Insert_Input = {
  created_by_id?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  experiments_figures?: Maybe<Experiments_Figure_Arr_Rel_Insert_Input>;
  experiments_project_experiments?: Maybe<Experiments_Project_Experiments_Arr_Rel_Insert_Input>;
  experiments_project_nodes?: Maybe<Experiments_Project_Nodes_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  metadata?: Maybe<Scalars['String']>;
  users_customuser?: Maybe<Users_Customuser_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Experiments_Project_Max_Fields = {
  __typename?: 'experiments_project_max_fields';
  created_by_id?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  metadata?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "experiments_project" */
export type Experiments_Project_Max_Order_By = {
  created_by_id?: Maybe<Order_By>;
  date_created?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metadata?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Experiments_Project_Min_Fields = {
  __typename?: 'experiments_project_min_fields';
  created_by_id?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  metadata?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "experiments_project" */
export type Experiments_Project_Min_Order_By = {
  created_by_id?: Maybe<Order_By>;
  date_created?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  metadata?: Maybe<Order_By>;
};

/** response of any mutation on the table "experiments_project" */
export type Experiments_Project_Mutation_Response = {
  __typename?: 'experiments_project_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Experiments_Project>;
};

/** columns and relationships of "experiments_project_nodes" */
export type Experiments_Project_Nodes = {
  __typename?: 'experiments_project_nodes';
  /** An object relationship */
  experiments_project: Experiments_Project;
  id: Scalars['Int'];
  node_id: Scalars['uuid'];
  /** An object relationship */
  parts_catalog_node: Parts_Catalog_Node;
  project_id: Scalars['uuid'];
};

/** aggregated selection of "experiments_project_nodes" */
export type Experiments_Project_Nodes_Aggregate = {
  __typename?: 'experiments_project_nodes_aggregate';
  aggregate?: Maybe<Experiments_Project_Nodes_Aggregate_Fields>;
  nodes: Array<Experiments_Project_Nodes>;
};

/** aggregate fields of "experiments_project_nodes" */
export type Experiments_Project_Nodes_Aggregate_Fields = {
  __typename?: 'experiments_project_nodes_aggregate_fields';
  avg?: Maybe<Experiments_Project_Nodes_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Experiments_Project_Nodes_Max_Fields>;
  min?: Maybe<Experiments_Project_Nodes_Min_Fields>;
  stddev?: Maybe<Experiments_Project_Nodes_Stddev_Fields>;
  stddev_pop?: Maybe<Experiments_Project_Nodes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Experiments_Project_Nodes_Stddev_Samp_Fields>;
  sum?: Maybe<Experiments_Project_Nodes_Sum_Fields>;
  var_pop?: Maybe<Experiments_Project_Nodes_Var_Pop_Fields>;
  var_samp?: Maybe<Experiments_Project_Nodes_Var_Samp_Fields>;
  variance?: Maybe<Experiments_Project_Nodes_Variance_Fields>;
};

/** aggregate fields of "experiments_project_nodes" */
export type Experiments_Project_Nodes_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Experiments_Project_Nodes_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "experiments_project_nodes" */
export type Experiments_Project_Nodes_Aggregate_Order_By = {
  avg?: Maybe<Experiments_Project_Nodes_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Experiments_Project_Nodes_Max_Order_By>;
  min?: Maybe<Experiments_Project_Nodes_Min_Order_By>;
  stddev?: Maybe<Experiments_Project_Nodes_Stddev_Order_By>;
  stddev_pop?: Maybe<Experiments_Project_Nodes_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Experiments_Project_Nodes_Stddev_Samp_Order_By>;
  sum?: Maybe<Experiments_Project_Nodes_Sum_Order_By>;
  var_pop?: Maybe<Experiments_Project_Nodes_Var_Pop_Order_By>;
  var_samp?: Maybe<Experiments_Project_Nodes_Var_Samp_Order_By>;
  variance?: Maybe<Experiments_Project_Nodes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "experiments_project_nodes" */
export type Experiments_Project_Nodes_Arr_Rel_Insert_Input = {
  data: Array<Experiments_Project_Nodes_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Experiments_Project_Nodes_On_Conflict>;
};

/** aggregate avg on columns */
export type Experiments_Project_Nodes_Avg_Fields = {
  __typename?: 'experiments_project_nodes_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "experiments_project_nodes" */
export type Experiments_Project_Nodes_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "experiments_project_nodes". All fields are combined with a logical 'AND'. */
export type Experiments_Project_Nodes_Bool_Exp = {
  _and?: Maybe<Array<Experiments_Project_Nodes_Bool_Exp>>;
  _not?: Maybe<Experiments_Project_Nodes_Bool_Exp>;
  _or?: Maybe<Array<Experiments_Project_Nodes_Bool_Exp>>;
  experiments_project?: Maybe<Experiments_Project_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  node_id?: Maybe<Uuid_Comparison_Exp>;
  parts_catalog_node?: Maybe<Parts_Catalog_Node_Bool_Exp>;
  project_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "experiments_project_nodes" */
export enum Experiments_Project_Nodes_Constraint {
  /** unique or primary key constraint */
  ExperimentsProjectNodesPkey = 'experiments_project_nodes_pkey',
  /** unique or primary key constraint */
  ExperimentsProjectNodesProjectIdNodeId_24de4c44Uniq = 'experiments_project_nodes_project_id_node_id_24de4c44_uniq',
}

/** input type for incrementing numeric columns in table "experiments_project_nodes" */
export type Experiments_Project_Nodes_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "experiments_project_nodes" */
export type Experiments_Project_Nodes_Insert_Input = {
  experiments_project?: Maybe<Experiments_Project_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  node_id?: Maybe<Scalars['uuid']>;
  parts_catalog_node?: Maybe<Parts_Catalog_Node_Obj_Rel_Insert_Input>;
  project_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Experiments_Project_Nodes_Max_Fields = {
  __typename?: 'experiments_project_nodes_max_fields';
  id?: Maybe<Scalars['Int']>;
  node_id?: Maybe<Scalars['uuid']>;
  project_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "experiments_project_nodes" */
export type Experiments_Project_Nodes_Max_Order_By = {
  id?: Maybe<Order_By>;
  node_id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Experiments_Project_Nodes_Min_Fields = {
  __typename?: 'experiments_project_nodes_min_fields';
  id?: Maybe<Scalars['Int']>;
  node_id?: Maybe<Scalars['uuid']>;
  project_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "experiments_project_nodes" */
export type Experiments_Project_Nodes_Min_Order_By = {
  id?: Maybe<Order_By>;
  node_id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "experiments_project_nodes" */
export type Experiments_Project_Nodes_Mutation_Response = {
  __typename?: 'experiments_project_nodes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Experiments_Project_Nodes>;
};

/** on conflict condition type for table "experiments_project_nodes" */
export type Experiments_Project_Nodes_On_Conflict = {
  constraint: Experiments_Project_Nodes_Constraint;
  update_columns?: Array<Experiments_Project_Nodes_Update_Column>;
  where?: Maybe<Experiments_Project_Nodes_Bool_Exp>;
};

/** Ordering options when selecting data from "experiments_project_nodes". */
export type Experiments_Project_Nodes_Order_By = {
  experiments_project?: Maybe<Experiments_Project_Order_By>;
  id?: Maybe<Order_By>;
  node_id?: Maybe<Order_By>;
  parts_catalog_node?: Maybe<Parts_Catalog_Node_Order_By>;
  project_id?: Maybe<Order_By>;
};

/** primary key columns input for table: experiments_project_nodes */
export type Experiments_Project_Nodes_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "experiments_project_nodes" */
export enum Experiments_Project_Nodes_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  NodeId = 'node_id',
  /** column name */
  ProjectId = 'project_id',
}

/** input type for updating data in table "experiments_project_nodes" */
export type Experiments_Project_Nodes_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  node_id?: Maybe<Scalars['uuid']>;
  project_id?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Experiments_Project_Nodes_Stddev_Fields = {
  __typename?: 'experiments_project_nodes_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "experiments_project_nodes" */
export type Experiments_Project_Nodes_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Experiments_Project_Nodes_Stddev_Pop_Fields = {
  __typename?: 'experiments_project_nodes_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "experiments_project_nodes" */
export type Experiments_Project_Nodes_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Experiments_Project_Nodes_Stddev_Samp_Fields = {
  __typename?: 'experiments_project_nodes_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "experiments_project_nodes" */
export type Experiments_Project_Nodes_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Experiments_Project_Nodes_Sum_Fields = {
  __typename?: 'experiments_project_nodes_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "experiments_project_nodes" */
export type Experiments_Project_Nodes_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "experiments_project_nodes" */
export enum Experiments_Project_Nodes_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  NodeId = 'node_id',
  /** column name */
  ProjectId = 'project_id',
}

/** aggregate var_pop on columns */
export type Experiments_Project_Nodes_Var_Pop_Fields = {
  __typename?: 'experiments_project_nodes_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "experiments_project_nodes" */
export type Experiments_Project_Nodes_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Experiments_Project_Nodes_Var_Samp_Fields = {
  __typename?: 'experiments_project_nodes_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "experiments_project_nodes" */
export type Experiments_Project_Nodes_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Experiments_Project_Nodes_Variance_Fields = {
  __typename?: 'experiments_project_nodes_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "experiments_project_nodes" */
export type Experiments_Project_Nodes_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** input type for inserting object relation for remote table "experiments_project" */
export type Experiments_Project_Obj_Rel_Insert_Input = {
  data: Experiments_Project_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Experiments_Project_On_Conflict>;
};

/** on conflict condition type for table "experiments_project" */
export type Experiments_Project_On_Conflict = {
  constraint: Experiments_Project_Constraint;
  update_columns?: Array<Experiments_Project_Update_Column>;
  where?: Maybe<Experiments_Project_Bool_Exp>;
};

/** Ordering options when selecting data from "experiments_project". */
export type Experiments_Project_Order_By = {
  created_by_id?: Maybe<Order_By>;
  date_created?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  experiments_figures_aggregate?: Maybe<Experiments_Figure_Aggregate_Order_By>;
  experiments_project_experiments_aggregate?: Maybe<Experiments_Project_Experiments_Aggregate_Order_By>;
  experiments_project_nodes_aggregate?: Maybe<Experiments_Project_Nodes_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  metadata?: Maybe<Order_By>;
  users_customuser?: Maybe<Users_Customuser_Order_By>;
};

/** primary key columns input for table: experiments_project */
export type Experiments_Project_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "experiments_project" */
export enum Experiments_Project_Select_Column {
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  DateCreated = 'date_created',
  /** column name */
  Description = 'description',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
}

/** input type for updating data in table "experiments_project" */
export type Experiments_Project_Set_Input = {
  created_by_id?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  metadata?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Experiments_Project_Stddev_Fields = {
  __typename?: 'experiments_project_stddev_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "experiments_project" */
export type Experiments_Project_Stddev_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Experiments_Project_Stddev_Pop_Fields = {
  __typename?: 'experiments_project_stddev_pop_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "experiments_project" */
export type Experiments_Project_Stddev_Pop_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Experiments_Project_Stddev_Samp_Fields = {
  __typename?: 'experiments_project_stddev_samp_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "experiments_project" */
export type Experiments_Project_Stddev_Samp_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Experiments_Project_Sum_Fields = {
  __typename?: 'experiments_project_sum_fields';
  created_by_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "experiments_project" */
export type Experiments_Project_Sum_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** update columns of table "experiments_project" */
export enum Experiments_Project_Update_Column {
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  DateCreated = 'date_created',
  /** column name */
  Description = 'description',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
}

/** aggregate var_pop on columns */
export type Experiments_Project_Var_Pop_Fields = {
  __typename?: 'experiments_project_var_pop_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "experiments_project" */
export type Experiments_Project_Var_Pop_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Experiments_Project_Var_Samp_Fields = {
  __typename?: 'experiments_project_var_samp_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "experiments_project" */
export type Experiments_Project_Var_Samp_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Experiments_Project_Variance_Fields = {
  __typename?: 'experiments_project_variance_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "experiments_project" */
export type Experiments_Project_Variance_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** columns and relationships of "measurement_biofile" */
export type Measurement_Biofile = {
  __typename?: 'measurement_biofile';
  chemical_perturbation?: Maybe<Scalars['String']>;
  created_by_id?: Maybe<Scalars['Int']>;
  date_created: Scalars['timestamptz'];
  display_name: Scalars['String'];
  /** An array relationship */
  experiments_experiment_files: Array<Experiments_Experiment_Files>;
  /** An aggregate relationship */
  experiments_experiment_files_aggregate: Experiments_Experiment_Files_Aggregate;
  file_type: Scalars['String'];
  genetic_perturbation?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** An array relationship */
  measurement_taskuser_task_files: Array<Measurement_Taskuser_Task_Files>;
  /** An aggregate relationship */
  measurement_taskuser_task_files_aggregate: Measurement_Taskuser_Task_Files_Aggregate;
  /** An object relationship */
  users_customuser?: Maybe<Users_Customuser>;
};

/** columns and relationships of "measurement_biofile" */
export type Measurement_BiofileExperiments_Experiment_FilesArgs = {
  distinct_on?: Maybe<Array<Experiments_Experiment_Files_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Experiment_Files_Order_By>>;
  where?: Maybe<Experiments_Experiment_Files_Bool_Exp>;
};

/** columns and relationships of "measurement_biofile" */
export type Measurement_BiofileExperiments_Experiment_Files_AggregateArgs = {
  distinct_on?: Maybe<Array<Experiments_Experiment_Files_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Experiment_Files_Order_By>>;
  where?: Maybe<Experiments_Experiment_Files_Bool_Exp>;
};

/** columns and relationships of "measurement_biofile" */
export type Measurement_BiofileMeasurement_Taskuser_Task_FilesArgs = {
  distinct_on?: Maybe<Array<Measurement_Taskuser_Task_Files_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Measurement_Taskuser_Task_Files_Order_By>>;
  where?: Maybe<Measurement_Taskuser_Task_Files_Bool_Exp>;
};

/** columns and relationships of "measurement_biofile" */
export type Measurement_BiofileMeasurement_Taskuser_Task_Files_AggregateArgs = {
  distinct_on?: Maybe<Array<Measurement_Taskuser_Task_Files_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Measurement_Taskuser_Task_Files_Order_By>>;
  where?: Maybe<Measurement_Taskuser_Task_Files_Bool_Exp>;
};

/** aggregated selection of "measurement_biofile" */
export type Measurement_Biofile_Aggregate = {
  __typename?: 'measurement_biofile_aggregate';
  aggregate?: Maybe<Measurement_Biofile_Aggregate_Fields>;
  nodes: Array<Measurement_Biofile>;
};

/** aggregate fields of "measurement_biofile" */
export type Measurement_Biofile_Aggregate_Fields = {
  __typename?: 'measurement_biofile_aggregate_fields';
  avg?: Maybe<Measurement_Biofile_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Measurement_Biofile_Max_Fields>;
  min?: Maybe<Measurement_Biofile_Min_Fields>;
  stddev?: Maybe<Measurement_Biofile_Stddev_Fields>;
  stddev_pop?: Maybe<Measurement_Biofile_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Measurement_Biofile_Stddev_Samp_Fields>;
  sum?: Maybe<Measurement_Biofile_Sum_Fields>;
  var_pop?: Maybe<Measurement_Biofile_Var_Pop_Fields>;
  var_samp?: Maybe<Measurement_Biofile_Var_Samp_Fields>;
  variance?: Maybe<Measurement_Biofile_Variance_Fields>;
};

/** aggregate fields of "measurement_biofile" */
export type Measurement_Biofile_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Measurement_Biofile_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "measurement_biofile" */
export type Measurement_Biofile_Aggregate_Order_By = {
  avg?: Maybe<Measurement_Biofile_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Measurement_Biofile_Max_Order_By>;
  min?: Maybe<Measurement_Biofile_Min_Order_By>;
  stddev?: Maybe<Measurement_Biofile_Stddev_Order_By>;
  stddev_pop?: Maybe<Measurement_Biofile_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Measurement_Biofile_Stddev_Samp_Order_By>;
  sum?: Maybe<Measurement_Biofile_Sum_Order_By>;
  var_pop?: Maybe<Measurement_Biofile_Var_Pop_Order_By>;
  var_samp?: Maybe<Measurement_Biofile_Var_Samp_Order_By>;
  variance?: Maybe<Measurement_Biofile_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "measurement_biofile" */
export type Measurement_Biofile_Arr_Rel_Insert_Input = {
  data: Array<Measurement_Biofile_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Measurement_Biofile_On_Conflict>;
};

/** aggregate avg on columns */
export type Measurement_Biofile_Avg_Fields = {
  __typename?: 'measurement_biofile_avg_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "measurement_biofile" */
export type Measurement_Biofile_Avg_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "measurement_biofile". All fields are combined with a logical 'AND'. */
export type Measurement_Biofile_Bool_Exp = {
  _and?: Maybe<Array<Measurement_Biofile_Bool_Exp>>;
  _not?: Maybe<Measurement_Biofile_Bool_Exp>;
  _or?: Maybe<Array<Measurement_Biofile_Bool_Exp>>;
  chemical_perturbation?: Maybe<String_Comparison_Exp>;
  created_by_id?: Maybe<Int_Comparison_Exp>;
  date_created?: Maybe<Timestamptz_Comparison_Exp>;
  display_name?: Maybe<String_Comparison_Exp>;
  experiments_experiment_files?: Maybe<Experiments_Experiment_Files_Bool_Exp>;
  file_type?: Maybe<String_Comparison_Exp>;
  genetic_perturbation?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  measurement_taskuser_task_files?: Maybe<Measurement_Taskuser_Task_Files_Bool_Exp>;
  users_customuser?: Maybe<Users_Customuser_Bool_Exp>;
};

/** unique or primary key constraints on table "measurement_biofile" */
export enum Measurement_Biofile_Constraint {
  /** unique or primary key constraint */
  MeasurementBiofilePkey = 'measurement_biofile_pkey',
}

/** input type for incrementing numeric columns in table "measurement_biofile" */
export type Measurement_Biofile_Inc_Input = {
  created_by_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "measurement_biofile" */
export type Measurement_Biofile_Insert_Input = {
  chemical_perturbation?: Maybe<Scalars['String']>;
  created_by_id?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  experiments_experiment_files?: Maybe<Experiments_Experiment_Files_Arr_Rel_Insert_Input>;
  file_type?: Maybe<Scalars['String']>;
  genetic_perturbation?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  measurement_taskuser_task_files?: Maybe<Measurement_Taskuser_Task_Files_Arr_Rel_Insert_Input>;
  users_customuser?: Maybe<Users_Customuser_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Measurement_Biofile_Max_Fields = {
  __typename?: 'measurement_biofile_max_fields';
  chemical_perturbation?: Maybe<Scalars['String']>;
  created_by_id?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  file_type?: Maybe<Scalars['String']>;
  genetic_perturbation?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "measurement_biofile" */
export type Measurement_Biofile_Max_Order_By = {
  chemical_perturbation?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  date_created?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  file_type?: Maybe<Order_By>;
  genetic_perturbation?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Measurement_Biofile_Min_Fields = {
  __typename?: 'measurement_biofile_min_fields';
  chemical_perturbation?: Maybe<Scalars['String']>;
  created_by_id?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  file_type?: Maybe<Scalars['String']>;
  genetic_perturbation?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "measurement_biofile" */
export type Measurement_Biofile_Min_Order_By = {
  chemical_perturbation?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  date_created?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  file_type?: Maybe<Order_By>;
  genetic_perturbation?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** response of any mutation on the table "measurement_biofile" */
export type Measurement_Biofile_Mutation_Response = {
  __typename?: 'measurement_biofile_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Measurement_Biofile>;
};

/** input type for inserting object relation for remote table "measurement_biofile" */
export type Measurement_Biofile_Obj_Rel_Insert_Input = {
  data: Measurement_Biofile_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Measurement_Biofile_On_Conflict>;
};

/** on conflict condition type for table "measurement_biofile" */
export type Measurement_Biofile_On_Conflict = {
  constraint: Measurement_Biofile_Constraint;
  update_columns?: Array<Measurement_Biofile_Update_Column>;
  where?: Maybe<Measurement_Biofile_Bool_Exp>;
};

/** Ordering options when selecting data from "measurement_biofile". */
export type Measurement_Biofile_Order_By = {
  chemical_perturbation?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  date_created?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  experiments_experiment_files_aggregate?: Maybe<Experiments_Experiment_Files_Aggregate_Order_By>;
  file_type?: Maybe<Order_By>;
  genetic_perturbation?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  measurement_taskuser_task_files_aggregate?: Maybe<Measurement_Taskuser_Task_Files_Aggregate_Order_By>;
  users_customuser?: Maybe<Users_Customuser_Order_By>;
};

/** primary key columns input for table: measurement_biofile */
export type Measurement_Biofile_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "measurement_biofile" */
export enum Measurement_Biofile_Select_Column {
  /** column name */
  ChemicalPerturbation = 'chemical_perturbation',
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  DateCreated = 'date_created',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  FileType = 'file_type',
  /** column name */
  GeneticPerturbation = 'genetic_perturbation',
  /** column name */
  Id = 'id',
}

/** input type for updating data in table "measurement_biofile" */
export type Measurement_Biofile_Set_Input = {
  chemical_perturbation?: Maybe<Scalars['String']>;
  created_by_id?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  file_type?: Maybe<Scalars['String']>;
  genetic_perturbation?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Measurement_Biofile_Stddev_Fields = {
  __typename?: 'measurement_biofile_stddev_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "measurement_biofile" */
export type Measurement_Biofile_Stddev_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Measurement_Biofile_Stddev_Pop_Fields = {
  __typename?: 'measurement_biofile_stddev_pop_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "measurement_biofile" */
export type Measurement_Biofile_Stddev_Pop_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Measurement_Biofile_Stddev_Samp_Fields = {
  __typename?: 'measurement_biofile_stddev_samp_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "measurement_biofile" */
export type Measurement_Biofile_Stddev_Samp_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Measurement_Biofile_Sum_Fields = {
  __typename?: 'measurement_biofile_sum_fields';
  created_by_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "measurement_biofile" */
export type Measurement_Biofile_Sum_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** update columns of table "measurement_biofile" */
export enum Measurement_Biofile_Update_Column {
  /** column name */
  ChemicalPerturbation = 'chemical_perturbation',
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  DateCreated = 'date_created',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  FileType = 'file_type',
  /** column name */
  GeneticPerturbation = 'genetic_perturbation',
  /** column name */
  Id = 'id',
}

/** aggregate var_pop on columns */
export type Measurement_Biofile_Var_Pop_Fields = {
  __typename?: 'measurement_biofile_var_pop_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "measurement_biofile" */
export type Measurement_Biofile_Var_Pop_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Measurement_Biofile_Var_Samp_Fields = {
  __typename?: 'measurement_biofile_var_samp_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "measurement_biofile" */
export type Measurement_Biofile_Var_Samp_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Measurement_Biofile_Variance_Fields = {
  __typename?: 'measurement_biofile_variance_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "measurement_biofile" */
export type Measurement_Biofile_Variance_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** columns and relationships of "measurement_taskuser" */
export type Measurement_Taskuser = {
  __typename?: 'measurement_taskuser';
  created_by_id?: Maybe<Scalars['Int']>;
  date_created: Scalars['timestamptz'];
  display_name: Scalars['String'];
  /** An array relationship */
  experiments_experiment_analyses: Array<Experiments_Experiment_Analyses>;
  /** An aggregate relationship */
  experiments_experiment_analyses_aggregate: Experiments_Experiment_Analyses_Aggregate;
  /** An array relationship */
  measurement_taskuser_task_files: Array<Measurement_Taskuser_Task_Files>;
  /** An aggregate relationship */
  measurement_taskuser_task_files_aggregate: Measurement_Taskuser_Task_Files_Aggregate;
  task_id: Scalars['uuid'];
  type: Scalars['String'];
  /** An object relationship */
  users_customuser?: Maybe<Users_Customuser>;
};

/** columns and relationships of "measurement_taskuser" */
export type Measurement_TaskuserExperiments_Experiment_AnalysesArgs = {
  distinct_on?: Maybe<Array<Experiments_Experiment_Analyses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Experiment_Analyses_Order_By>>;
  where?: Maybe<Experiments_Experiment_Analyses_Bool_Exp>;
};

/** columns and relationships of "measurement_taskuser" */
export type Measurement_TaskuserExperiments_Experiment_Analyses_AggregateArgs =
  {
    distinct_on?: Maybe<Array<Experiments_Experiment_Analyses_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Experiments_Experiment_Analyses_Order_By>>;
    where?: Maybe<Experiments_Experiment_Analyses_Bool_Exp>;
  };

/** columns and relationships of "measurement_taskuser" */
export type Measurement_TaskuserMeasurement_Taskuser_Task_FilesArgs = {
  distinct_on?: Maybe<Array<Measurement_Taskuser_Task_Files_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Measurement_Taskuser_Task_Files_Order_By>>;
  where?: Maybe<Measurement_Taskuser_Task_Files_Bool_Exp>;
};

/** columns and relationships of "measurement_taskuser" */
export type Measurement_TaskuserMeasurement_Taskuser_Task_Files_AggregateArgs =
  {
    distinct_on?: Maybe<Array<Measurement_Taskuser_Task_Files_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Measurement_Taskuser_Task_Files_Order_By>>;
    where?: Maybe<Measurement_Taskuser_Task_Files_Bool_Exp>;
  };

/** aggregated selection of "measurement_taskuser" */
export type Measurement_Taskuser_Aggregate = {
  __typename?: 'measurement_taskuser_aggregate';
  aggregate?: Maybe<Measurement_Taskuser_Aggregate_Fields>;
  nodes: Array<Measurement_Taskuser>;
};

/** aggregate fields of "measurement_taskuser" */
export type Measurement_Taskuser_Aggregate_Fields = {
  __typename?: 'measurement_taskuser_aggregate_fields';
  avg?: Maybe<Measurement_Taskuser_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Measurement_Taskuser_Max_Fields>;
  min?: Maybe<Measurement_Taskuser_Min_Fields>;
  stddev?: Maybe<Measurement_Taskuser_Stddev_Fields>;
  stddev_pop?: Maybe<Measurement_Taskuser_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Measurement_Taskuser_Stddev_Samp_Fields>;
  sum?: Maybe<Measurement_Taskuser_Sum_Fields>;
  var_pop?: Maybe<Measurement_Taskuser_Var_Pop_Fields>;
  var_samp?: Maybe<Measurement_Taskuser_Var_Samp_Fields>;
  variance?: Maybe<Measurement_Taskuser_Variance_Fields>;
};

/** aggregate fields of "measurement_taskuser" */
export type Measurement_Taskuser_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Measurement_Taskuser_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "measurement_taskuser" */
export type Measurement_Taskuser_Aggregate_Order_By = {
  avg?: Maybe<Measurement_Taskuser_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Measurement_Taskuser_Max_Order_By>;
  min?: Maybe<Measurement_Taskuser_Min_Order_By>;
  stddev?: Maybe<Measurement_Taskuser_Stddev_Order_By>;
  stddev_pop?: Maybe<Measurement_Taskuser_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Measurement_Taskuser_Stddev_Samp_Order_By>;
  sum?: Maybe<Measurement_Taskuser_Sum_Order_By>;
  var_pop?: Maybe<Measurement_Taskuser_Var_Pop_Order_By>;
  var_samp?: Maybe<Measurement_Taskuser_Var_Samp_Order_By>;
  variance?: Maybe<Measurement_Taskuser_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "measurement_taskuser" */
export type Measurement_Taskuser_Arr_Rel_Insert_Input = {
  data: Array<Measurement_Taskuser_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Measurement_Taskuser_On_Conflict>;
};

/** aggregate avg on columns */
export type Measurement_Taskuser_Avg_Fields = {
  __typename?: 'measurement_taskuser_avg_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "measurement_taskuser" */
export type Measurement_Taskuser_Avg_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "measurement_taskuser". All fields are combined with a logical 'AND'. */
export type Measurement_Taskuser_Bool_Exp = {
  _and?: Maybe<Array<Measurement_Taskuser_Bool_Exp>>;
  _not?: Maybe<Measurement_Taskuser_Bool_Exp>;
  _or?: Maybe<Array<Measurement_Taskuser_Bool_Exp>>;
  created_by_id?: Maybe<Int_Comparison_Exp>;
  date_created?: Maybe<Timestamptz_Comparison_Exp>;
  display_name?: Maybe<String_Comparison_Exp>;
  experiments_experiment_analyses?: Maybe<Experiments_Experiment_Analyses_Bool_Exp>;
  measurement_taskuser_task_files?: Maybe<Measurement_Taskuser_Task_Files_Bool_Exp>;
  task_id?: Maybe<Uuid_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  users_customuser?: Maybe<Users_Customuser_Bool_Exp>;
};

/** unique or primary key constraints on table "measurement_taskuser" */
export enum Measurement_Taskuser_Constraint {
  /** unique or primary key constraint */
  MeasurementTaskuserPkey = 'measurement_taskuser_pkey',
}

/** input type for incrementing numeric columns in table "measurement_taskuser" */
export type Measurement_Taskuser_Inc_Input = {
  created_by_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "measurement_taskuser" */
export type Measurement_Taskuser_Insert_Input = {
  created_by_id?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  experiments_experiment_analyses?: Maybe<Experiments_Experiment_Analyses_Arr_Rel_Insert_Input>;
  measurement_taskuser_task_files?: Maybe<Measurement_Taskuser_Task_Files_Arr_Rel_Insert_Input>;
  task_id?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
  users_customuser?: Maybe<Users_Customuser_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Measurement_Taskuser_Max_Fields = {
  __typename?: 'measurement_taskuser_max_fields';
  created_by_id?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  task_id?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "measurement_taskuser" */
export type Measurement_Taskuser_Max_Order_By = {
  created_by_id?: Maybe<Order_By>;
  date_created?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  task_id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Measurement_Taskuser_Min_Fields = {
  __typename?: 'measurement_taskuser_min_fields';
  created_by_id?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  task_id?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "measurement_taskuser" */
export type Measurement_Taskuser_Min_Order_By = {
  created_by_id?: Maybe<Order_By>;
  date_created?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  task_id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** response of any mutation on the table "measurement_taskuser" */
export type Measurement_Taskuser_Mutation_Response = {
  __typename?: 'measurement_taskuser_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Measurement_Taskuser>;
};

/** input type for inserting object relation for remote table "measurement_taskuser" */
export type Measurement_Taskuser_Obj_Rel_Insert_Input = {
  data: Measurement_Taskuser_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Measurement_Taskuser_On_Conflict>;
};

/** on conflict condition type for table "measurement_taskuser" */
export type Measurement_Taskuser_On_Conflict = {
  constraint: Measurement_Taskuser_Constraint;
  update_columns?: Array<Measurement_Taskuser_Update_Column>;
  where?: Maybe<Measurement_Taskuser_Bool_Exp>;
};

/** Ordering options when selecting data from "measurement_taskuser". */
export type Measurement_Taskuser_Order_By = {
  created_by_id?: Maybe<Order_By>;
  date_created?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  experiments_experiment_analyses_aggregate?: Maybe<Experiments_Experiment_Analyses_Aggregate_Order_By>;
  measurement_taskuser_task_files_aggregate?: Maybe<Measurement_Taskuser_Task_Files_Aggregate_Order_By>;
  task_id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  users_customuser?: Maybe<Users_Customuser_Order_By>;
};

/** primary key columns input for table: measurement_taskuser */
export type Measurement_Taskuser_Pk_Columns_Input = {
  task_id: Scalars['uuid'];
};

/** select columns of table "measurement_taskuser" */
export enum Measurement_Taskuser_Select_Column {
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  DateCreated = 'date_created',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  TaskId = 'task_id',
  /** column name */
  Type = 'type',
}

/** input type for updating data in table "measurement_taskuser" */
export type Measurement_Taskuser_Set_Input = {
  created_by_id?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  task_id?: Maybe<Scalars['uuid']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Measurement_Taskuser_Stddev_Fields = {
  __typename?: 'measurement_taskuser_stddev_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "measurement_taskuser" */
export type Measurement_Taskuser_Stddev_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Measurement_Taskuser_Stddev_Pop_Fields = {
  __typename?: 'measurement_taskuser_stddev_pop_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "measurement_taskuser" */
export type Measurement_Taskuser_Stddev_Pop_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Measurement_Taskuser_Stddev_Samp_Fields = {
  __typename?: 'measurement_taskuser_stddev_samp_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "measurement_taskuser" */
export type Measurement_Taskuser_Stddev_Samp_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Measurement_Taskuser_Sum_Fields = {
  __typename?: 'measurement_taskuser_sum_fields';
  created_by_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "measurement_taskuser" */
export type Measurement_Taskuser_Sum_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** columns and relationships of "measurement_taskuser_task_files" */
export type Measurement_Taskuser_Task_Files = {
  __typename?: 'measurement_taskuser_task_files';
  biofile_id: Scalars['uuid'];
  id: Scalars['Int'];
  /** An object relationship */
  measurement_biofile: Measurement_Biofile;
  /** An object relationship */
  measurement_taskuser: Measurement_Taskuser;
  taskuser_id: Scalars['uuid'];
};

/** aggregated selection of "measurement_taskuser_task_files" */
export type Measurement_Taskuser_Task_Files_Aggregate = {
  __typename?: 'measurement_taskuser_task_files_aggregate';
  aggregate?: Maybe<Measurement_Taskuser_Task_Files_Aggregate_Fields>;
  nodes: Array<Measurement_Taskuser_Task_Files>;
};

/** aggregate fields of "measurement_taskuser_task_files" */
export type Measurement_Taskuser_Task_Files_Aggregate_Fields = {
  __typename?: 'measurement_taskuser_task_files_aggregate_fields';
  avg?: Maybe<Measurement_Taskuser_Task_Files_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Measurement_Taskuser_Task_Files_Max_Fields>;
  min?: Maybe<Measurement_Taskuser_Task_Files_Min_Fields>;
  stddev?: Maybe<Measurement_Taskuser_Task_Files_Stddev_Fields>;
  stddev_pop?: Maybe<Measurement_Taskuser_Task_Files_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Measurement_Taskuser_Task_Files_Stddev_Samp_Fields>;
  sum?: Maybe<Measurement_Taskuser_Task_Files_Sum_Fields>;
  var_pop?: Maybe<Measurement_Taskuser_Task_Files_Var_Pop_Fields>;
  var_samp?: Maybe<Measurement_Taskuser_Task_Files_Var_Samp_Fields>;
  variance?: Maybe<Measurement_Taskuser_Task_Files_Variance_Fields>;
};

/** aggregate fields of "measurement_taskuser_task_files" */
export type Measurement_Taskuser_Task_Files_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Measurement_Taskuser_Task_Files_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "measurement_taskuser_task_files" */
export type Measurement_Taskuser_Task_Files_Aggregate_Order_By = {
  avg?: Maybe<Measurement_Taskuser_Task_Files_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Measurement_Taskuser_Task_Files_Max_Order_By>;
  min?: Maybe<Measurement_Taskuser_Task_Files_Min_Order_By>;
  stddev?: Maybe<Measurement_Taskuser_Task_Files_Stddev_Order_By>;
  stddev_pop?: Maybe<Measurement_Taskuser_Task_Files_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Measurement_Taskuser_Task_Files_Stddev_Samp_Order_By>;
  sum?: Maybe<Measurement_Taskuser_Task_Files_Sum_Order_By>;
  var_pop?: Maybe<Measurement_Taskuser_Task_Files_Var_Pop_Order_By>;
  var_samp?: Maybe<Measurement_Taskuser_Task_Files_Var_Samp_Order_By>;
  variance?: Maybe<Measurement_Taskuser_Task_Files_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "measurement_taskuser_task_files" */
export type Measurement_Taskuser_Task_Files_Arr_Rel_Insert_Input = {
  data: Array<Measurement_Taskuser_Task_Files_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Measurement_Taskuser_Task_Files_On_Conflict>;
};

/** aggregate avg on columns */
export type Measurement_Taskuser_Task_Files_Avg_Fields = {
  __typename?: 'measurement_taskuser_task_files_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "measurement_taskuser_task_files" */
export type Measurement_Taskuser_Task_Files_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "measurement_taskuser_task_files". All fields are combined with a logical 'AND'. */
export type Measurement_Taskuser_Task_Files_Bool_Exp = {
  _and?: Maybe<Array<Measurement_Taskuser_Task_Files_Bool_Exp>>;
  _not?: Maybe<Measurement_Taskuser_Task_Files_Bool_Exp>;
  _or?: Maybe<Array<Measurement_Taskuser_Task_Files_Bool_Exp>>;
  biofile_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  measurement_biofile?: Maybe<Measurement_Biofile_Bool_Exp>;
  measurement_taskuser?: Maybe<Measurement_Taskuser_Bool_Exp>;
  taskuser_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "measurement_taskuser_task_files" */
export enum Measurement_Taskuser_Task_Files_Constraint {
  /** unique or primary key constraint */
  MeasurementTaskuserTasTaskuserIdBiofileId_10bd8ad1Uniq = 'measurement_taskuser_tas_taskuser_id_biofile_id_10bd8ad1_uniq',
  /** unique or primary key constraint */
  MeasurementTaskuserTaskFilesPkey = 'measurement_taskuser_task_files_pkey',
}

/** input type for incrementing numeric columns in table "measurement_taskuser_task_files" */
export type Measurement_Taskuser_Task_Files_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "measurement_taskuser_task_files" */
export type Measurement_Taskuser_Task_Files_Insert_Input = {
  biofile_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['Int']>;
  measurement_biofile?: Maybe<Measurement_Biofile_Obj_Rel_Insert_Input>;
  measurement_taskuser?: Maybe<Measurement_Taskuser_Obj_Rel_Insert_Input>;
  taskuser_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Measurement_Taskuser_Task_Files_Max_Fields = {
  __typename?: 'measurement_taskuser_task_files_max_fields';
  biofile_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['Int']>;
  taskuser_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "measurement_taskuser_task_files" */
export type Measurement_Taskuser_Task_Files_Max_Order_By = {
  biofile_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  taskuser_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Measurement_Taskuser_Task_Files_Min_Fields = {
  __typename?: 'measurement_taskuser_task_files_min_fields';
  biofile_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['Int']>;
  taskuser_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "measurement_taskuser_task_files" */
export type Measurement_Taskuser_Task_Files_Min_Order_By = {
  biofile_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  taskuser_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "measurement_taskuser_task_files" */
export type Measurement_Taskuser_Task_Files_Mutation_Response = {
  __typename?: 'measurement_taskuser_task_files_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Measurement_Taskuser_Task_Files>;
};

/** on conflict condition type for table "measurement_taskuser_task_files" */
export type Measurement_Taskuser_Task_Files_On_Conflict = {
  constraint: Measurement_Taskuser_Task_Files_Constraint;
  update_columns?: Array<Measurement_Taskuser_Task_Files_Update_Column>;
  where?: Maybe<Measurement_Taskuser_Task_Files_Bool_Exp>;
};

/** Ordering options when selecting data from "measurement_taskuser_task_files". */
export type Measurement_Taskuser_Task_Files_Order_By = {
  biofile_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  measurement_biofile?: Maybe<Measurement_Biofile_Order_By>;
  measurement_taskuser?: Maybe<Measurement_Taskuser_Order_By>;
  taskuser_id?: Maybe<Order_By>;
};

/** primary key columns input for table: measurement_taskuser_task_files */
export type Measurement_Taskuser_Task_Files_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "measurement_taskuser_task_files" */
export enum Measurement_Taskuser_Task_Files_Select_Column {
  /** column name */
  BiofileId = 'biofile_id',
  /** column name */
  Id = 'id',
  /** column name */
  TaskuserId = 'taskuser_id',
}

/** input type for updating data in table "measurement_taskuser_task_files" */
export type Measurement_Taskuser_Task_Files_Set_Input = {
  biofile_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['Int']>;
  taskuser_id?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Measurement_Taskuser_Task_Files_Stddev_Fields = {
  __typename?: 'measurement_taskuser_task_files_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "measurement_taskuser_task_files" */
export type Measurement_Taskuser_Task_Files_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Measurement_Taskuser_Task_Files_Stddev_Pop_Fields = {
  __typename?: 'measurement_taskuser_task_files_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "measurement_taskuser_task_files" */
export type Measurement_Taskuser_Task_Files_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Measurement_Taskuser_Task_Files_Stddev_Samp_Fields = {
  __typename?: 'measurement_taskuser_task_files_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "measurement_taskuser_task_files" */
export type Measurement_Taskuser_Task_Files_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Measurement_Taskuser_Task_Files_Sum_Fields = {
  __typename?: 'measurement_taskuser_task_files_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "measurement_taskuser_task_files" */
export type Measurement_Taskuser_Task_Files_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "measurement_taskuser_task_files" */
export enum Measurement_Taskuser_Task_Files_Update_Column {
  /** column name */
  BiofileId = 'biofile_id',
  /** column name */
  Id = 'id',
  /** column name */
  TaskuserId = 'taskuser_id',
}

/** aggregate var_pop on columns */
export type Measurement_Taskuser_Task_Files_Var_Pop_Fields = {
  __typename?: 'measurement_taskuser_task_files_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "measurement_taskuser_task_files" */
export type Measurement_Taskuser_Task_Files_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Measurement_Taskuser_Task_Files_Var_Samp_Fields = {
  __typename?: 'measurement_taskuser_task_files_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "measurement_taskuser_task_files" */
export type Measurement_Taskuser_Task_Files_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Measurement_Taskuser_Task_Files_Variance_Fields = {
  __typename?: 'measurement_taskuser_task_files_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "measurement_taskuser_task_files" */
export type Measurement_Taskuser_Task_Files_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "measurement_taskuser" */
export enum Measurement_Taskuser_Update_Column {
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  DateCreated = 'date_created',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  TaskId = 'task_id',
  /** column name */
  Type = 'type',
}

/** aggregate var_pop on columns */
export type Measurement_Taskuser_Var_Pop_Fields = {
  __typename?: 'measurement_taskuser_var_pop_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "measurement_taskuser" */
export type Measurement_Taskuser_Var_Pop_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Measurement_Taskuser_Var_Samp_Fields = {
  __typename?: 'measurement_taskuser_var_samp_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "measurement_taskuser" */
export type Measurement_Taskuser_Var_Samp_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Measurement_Taskuser_Variance_Fields = {
  __typename?: 'measurement_taskuser_variance_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "measurement_taskuser" */
export type Measurement_Taskuser_Variance_Order_By = {
  created_by_id?: Maybe<Order_By>;
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
  /** delete data from the table: "django_celery_results_taskresult" */
  delete_django_celery_results_taskresult?: Maybe<Django_Celery_Results_Taskresult_Mutation_Response>;
  /** delete single row from the table: "django_celery_results_taskresult" */
  delete_django_celery_results_taskresult_by_pk?: Maybe<Django_Celery_Results_Taskresult>;
  /** delete data from the table: "experiments_experiment" */
  delete_experiments_experiment?: Maybe<Experiments_Experiment_Mutation_Response>;
  /** delete data from the table: "experiments_experiment_analyses" */
  delete_experiments_experiment_analyses?: Maybe<Experiments_Experiment_Analyses_Mutation_Response>;
  /** delete single row from the table: "experiments_experiment_analyses" */
  delete_experiments_experiment_analyses_by_pk?: Maybe<Experiments_Experiment_Analyses>;
  /** delete single row from the table: "experiments_experiment" */
  delete_experiments_experiment_by_pk?: Maybe<Experiments_Experiment>;
  /** delete data from the table: "experiments_experiment_files" */
  delete_experiments_experiment_files?: Maybe<Experiments_Experiment_Files_Mutation_Response>;
  /** delete single row from the table: "experiments_experiment_files" */
  delete_experiments_experiment_files_by_pk?: Maybe<Experiments_Experiment_Files>;
  /** delete data from the table: "experiments_figure" */
  delete_experiments_figure?: Maybe<Experiments_Figure_Mutation_Response>;
  /** delete single row from the table: "experiments_figure" */
  delete_experiments_figure_by_pk?: Maybe<Experiments_Figure>;
  /** delete data from the table: "experiments_project" */
  delete_experiments_project?: Maybe<Experiments_Project_Mutation_Response>;
  /** delete single row from the table: "experiments_project" */
  delete_experiments_project_by_pk?: Maybe<Experiments_Project>;
  /** delete data from the table: "experiments_project_experiments" */
  delete_experiments_project_experiments?: Maybe<Experiments_Project_Experiments_Mutation_Response>;
  /** delete single row from the table: "experiments_project_experiments" */
  delete_experiments_project_experiments_by_pk?: Maybe<Experiments_Project_Experiments>;
  /** delete data from the table: "experiments_project_nodes" */
  delete_experiments_project_nodes?: Maybe<Experiments_Project_Nodes_Mutation_Response>;
  /** delete single row from the table: "experiments_project_nodes" */
  delete_experiments_project_nodes_by_pk?: Maybe<Experiments_Project_Nodes>;
  /** delete data from the table: "measurement_biofile" */
  delete_measurement_biofile?: Maybe<Measurement_Biofile_Mutation_Response>;
  /** delete single row from the table: "measurement_biofile" */
  delete_measurement_biofile_by_pk?: Maybe<Measurement_Biofile>;
  /** delete data from the table: "measurement_taskuser" */
  delete_measurement_taskuser?: Maybe<Measurement_Taskuser_Mutation_Response>;
  /** delete single row from the table: "measurement_taskuser" */
  delete_measurement_taskuser_by_pk?: Maybe<Measurement_Taskuser>;
  /** delete data from the table: "measurement_taskuser_task_files" */
  delete_measurement_taskuser_task_files?: Maybe<Measurement_Taskuser_Task_Files_Mutation_Response>;
  /** delete single row from the table: "measurement_taskuser_task_files" */
  delete_measurement_taskuser_task_files_by_pk?: Maybe<Measurement_Taskuser_Task_Files>;
  /** delete data from the table: "part" */
  delete_part?: Maybe<Part_Mutation_Response>;
  /** delete single row from the table: "part" */
  delete_part_by_pk?: Maybe<Part>;
  /** delete data from the table: "part_type" */
  delete_part_type?: Maybe<Part_Type_Mutation_Response>;
  /** delete single row from the table: "part_type" */
  delete_part_type_by_pk?: Maybe<Part_Type>;
  /** delete data from the table: "parts_catalog_experimentnode" */
  delete_parts_catalog_experimentnode?: Maybe<Parts_Catalog_Experimentnode_Mutation_Response>;
  /** delete single row from the table: "parts_catalog_experimentnode" */
  delete_parts_catalog_experimentnode_by_pk?: Maybe<Parts_Catalog_Experimentnode>;
  /** delete data from the table: "parts_catalog_node" */
  delete_parts_catalog_node?: Maybe<Parts_Catalog_Node_Mutation_Response>;
  /** delete single row from the table: "parts_catalog_node" */
  delete_parts_catalog_node_by_pk?: Maybe<Parts_Catalog_Node>;
  /** delete data from the table: "parts_catalog_noderelation" */
  delete_parts_catalog_noderelation?: Maybe<Parts_Catalog_Noderelation_Mutation_Response>;
  /** delete single row from the table: "parts_catalog_noderelation" */
  delete_parts_catalog_noderelation_by_pk?: Maybe<Parts_Catalog_Noderelation>;
  /** delete data from the table: "parts_catalog_simulationnode" */
  delete_parts_catalog_simulationnode?: Maybe<Parts_Catalog_Simulationnode_Mutation_Response>;
  /** delete single row from the table: "parts_catalog_simulationnode" */
  delete_parts_catalog_simulationnode_by_pk?: Maybe<Parts_Catalog_Simulationnode>;
  /** delete data from the table: "project" */
  delete_project?: Maybe<Project_Mutation_Response>;
  /** delete single row from the table: "project" */
  delete_project_by_pk?: Maybe<Project>;
  /** delete data from the table: "project_construct" */
  delete_project_construct?: Maybe<Project_Construct_Mutation_Response>;
  /** delete single row from the table: "project_construct" */
  delete_project_construct_by_pk?: Maybe<Project_Construct>;
  /** delete data from the table: "simulation_simulationresult" */
  delete_simulation_simulationresult?: Maybe<Simulation_Simulationresult_Mutation_Response>;
  /** delete single row from the table: "simulation_simulationresult" */
  delete_simulation_simulationresult_by_pk?: Maybe<Simulation_Simulationresult>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** delete data from the table: "users_customuser" */
  delete_users_customuser?: Maybe<Users_Customuser_Mutation_Response>;
  /** delete single row from the table: "users_customuser" */
  delete_users_customuser_by_pk?: Maybe<Users_Customuser>;
  /** insert data into the table: "construct" */
  insert_construct?: Maybe<Construct_Mutation_Response>;
  /** insert a single row into the table: "construct" */
  insert_construct_one?: Maybe<Construct>;
  /** insert data into the table: "construct_part" */
  insert_construct_part?: Maybe<Construct_Part_Mutation_Response>;
  /** insert a single row into the table: "construct_part" */
  insert_construct_part_one?: Maybe<Construct_Part>;
  /** insert data into the table: "django_celery_results_taskresult" */
  insert_django_celery_results_taskresult?: Maybe<Django_Celery_Results_Taskresult_Mutation_Response>;
  /** insert a single row into the table: "django_celery_results_taskresult" */
  insert_django_celery_results_taskresult_one?: Maybe<Django_Celery_Results_Taskresult>;
  /** insert data into the table: "experiments_experiment" */
  insert_experiments_experiment?: Maybe<Experiments_Experiment_Mutation_Response>;
  /** insert data into the table: "experiments_experiment_analyses" */
  insert_experiments_experiment_analyses?: Maybe<Experiments_Experiment_Analyses_Mutation_Response>;
  /** insert a single row into the table: "experiments_experiment_analyses" */
  insert_experiments_experiment_analyses_one?: Maybe<Experiments_Experiment_Analyses>;
  /** insert data into the table: "experiments_experiment_files" */
  insert_experiments_experiment_files?: Maybe<Experiments_Experiment_Files_Mutation_Response>;
  /** insert a single row into the table: "experiments_experiment_files" */
  insert_experiments_experiment_files_one?: Maybe<Experiments_Experiment_Files>;
  /** insert a single row into the table: "experiments_experiment" */
  insert_experiments_experiment_one?: Maybe<Experiments_Experiment>;
  /** insert data into the table: "experiments_figure" */
  insert_experiments_figure?: Maybe<Experiments_Figure_Mutation_Response>;
  /** insert a single row into the table: "experiments_figure" */
  insert_experiments_figure_one?: Maybe<Experiments_Figure>;
  /** insert data into the table: "experiments_project" */
  insert_experiments_project?: Maybe<Experiments_Project_Mutation_Response>;
  /** insert data into the table: "experiments_project_experiments" */
  insert_experiments_project_experiments?: Maybe<Experiments_Project_Experiments_Mutation_Response>;
  /** insert a single row into the table: "experiments_project_experiments" */
  insert_experiments_project_experiments_one?: Maybe<Experiments_Project_Experiments>;
  /** insert data into the table: "experiments_project_nodes" */
  insert_experiments_project_nodes?: Maybe<Experiments_Project_Nodes_Mutation_Response>;
  /** insert a single row into the table: "experiments_project_nodes" */
  insert_experiments_project_nodes_one?: Maybe<Experiments_Project_Nodes>;
  /** insert a single row into the table: "experiments_project" */
  insert_experiments_project_one?: Maybe<Experiments_Project>;
  /** insert data into the table: "measurement_biofile" */
  insert_measurement_biofile?: Maybe<Measurement_Biofile_Mutation_Response>;
  /** insert a single row into the table: "measurement_biofile" */
  insert_measurement_biofile_one?: Maybe<Measurement_Biofile>;
  /** insert data into the table: "measurement_taskuser" */
  insert_measurement_taskuser?: Maybe<Measurement_Taskuser_Mutation_Response>;
  /** insert a single row into the table: "measurement_taskuser" */
  insert_measurement_taskuser_one?: Maybe<Measurement_Taskuser>;
  /** insert data into the table: "measurement_taskuser_task_files" */
  insert_measurement_taskuser_task_files?: Maybe<Measurement_Taskuser_Task_Files_Mutation_Response>;
  /** insert a single row into the table: "measurement_taskuser_task_files" */
  insert_measurement_taskuser_task_files_one?: Maybe<Measurement_Taskuser_Task_Files>;
  /** insert data into the table: "part" */
  insert_part?: Maybe<Part_Mutation_Response>;
  /** insert a single row into the table: "part" */
  insert_part_one?: Maybe<Part>;
  /** insert data into the table: "part_type" */
  insert_part_type?: Maybe<Part_Type_Mutation_Response>;
  /** insert a single row into the table: "part_type" */
  insert_part_type_one?: Maybe<Part_Type>;
  /** insert data into the table: "parts_catalog_experimentnode" */
  insert_parts_catalog_experimentnode?: Maybe<Parts_Catalog_Experimentnode_Mutation_Response>;
  /** insert a single row into the table: "parts_catalog_experimentnode" */
  insert_parts_catalog_experimentnode_one?: Maybe<Parts_Catalog_Experimentnode>;
  /** insert data into the table: "parts_catalog_node" */
  insert_parts_catalog_node?: Maybe<Parts_Catalog_Node_Mutation_Response>;
  /** insert a single row into the table: "parts_catalog_node" */
  insert_parts_catalog_node_one?: Maybe<Parts_Catalog_Node>;
  /** insert data into the table: "parts_catalog_noderelation" */
  insert_parts_catalog_noderelation?: Maybe<Parts_Catalog_Noderelation_Mutation_Response>;
  /** insert a single row into the table: "parts_catalog_noderelation" */
  insert_parts_catalog_noderelation_one?: Maybe<Parts_Catalog_Noderelation>;
  /** insert data into the table: "parts_catalog_simulationnode" */
  insert_parts_catalog_simulationnode?: Maybe<Parts_Catalog_Simulationnode_Mutation_Response>;
  /** insert a single row into the table: "parts_catalog_simulationnode" */
  insert_parts_catalog_simulationnode_one?: Maybe<Parts_Catalog_Simulationnode>;
  /** insert data into the table: "project" */
  insert_project?: Maybe<Project_Mutation_Response>;
  /** insert data into the table: "project_construct" */
  insert_project_construct?: Maybe<Project_Construct_Mutation_Response>;
  /** insert a single row into the table: "project_construct" */
  insert_project_construct_one?: Maybe<Project_Construct>;
  /** insert a single row into the table: "project" */
  insert_project_one?: Maybe<Project>;
  /** insert data into the table: "simulation_simulationresult" */
  insert_simulation_simulationresult?: Maybe<Simulation_Simulationresult_Mutation_Response>;
  /** insert a single row into the table: "simulation_simulationresult" */
  insert_simulation_simulationresult_one?: Maybe<Simulation_Simulationresult>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** insert data into the table: "users_customuser" */
  insert_users_customuser?: Maybe<Users_Customuser_Mutation_Response>;
  /** insert a single row into the table: "users_customuser" */
  insert_users_customuser_one?: Maybe<Users_Customuser>;
  /** update data of the table: "construct" */
  update_construct?: Maybe<Construct_Mutation_Response>;
  /** update single row of the table: "construct" */
  update_construct_by_pk?: Maybe<Construct>;
  /** update data of the table: "construct_part" */
  update_construct_part?: Maybe<Construct_Part_Mutation_Response>;
  /** update single row of the table: "construct_part" */
  update_construct_part_by_pk?: Maybe<Construct_Part>;
  /** update data of the table: "django_celery_results_taskresult" */
  update_django_celery_results_taskresult?: Maybe<Django_Celery_Results_Taskresult_Mutation_Response>;
  /** update single row of the table: "django_celery_results_taskresult" */
  update_django_celery_results_taskresult_by_pk?: Maybe<Django_Celery_Results_Taskresult>;
  /** update data of the table: "experiments_experiment" */
  update_experiments_experiment?: Maybe<Experiments_Experiment_Mutation_Response>;
  /** update data of the table: "experiments_experiment_analyses" */
  update_experiments_experiment_analyses?: Maybe<Experiments_Experiment_Analyses_Mutation_Response>;
  /** update single row of the table: "experiments_experiment_analyses" */
  update_experiments_experiment_analyses_by_pk?: Maybe<Experiments_Experiment_Analyses>;
  /** update single row of the table: "experiments_experiment" */
  update_experiments_experiment_by_pk?: Maybe<Experiments_Experiment>;
  /** update data of the table: "experiments_experiment_files" */
  update_experiments_experiment_files?: Maybe<Experiments_Experiment_Files_Mutation_Response>;
  /** update single row of the table: "experiments_experiment_files" */
  update_experiments_experiment_files_by_pk?: Maybe<Experiments_Experiment_Files>;
  /** update data of the table: "experiments_figure" */
  update_experiments_figure?: Maybe<Experiments_Figure_Mutation_Response>;
  /** update single row of the table: "experiments_figure" */
  update_experiments_figure_by_pk?: Maybe<Experiments_Figure>;
  /** update data of the table: "experiments_project" */
  update_experiments_project?: Maybe<Experiments_Project_Mutation_Response>;
  /** update single row of the table: "experiments_project" */
  update_experiments_project_by_pk?: Maybe<Experiments_Project>;
  /** update data of the table: "experiments_project_experiments" */
  update_experiments_project_experiments?: Maybe<Experiments_Project_Experiments_Mutation_Response>;
  /** update single row of the table: "experiments_project_experiments" */
  update_experiments_project_experiments_by_pk?: Maybe<Experiments_Project_Experiments>;
  /** update data of the table: "experiments_project_nodes" */
  update_experiments_project_nodes?: Maybe<Experiments_Project_Nodes_Mutation_Response>;
  /** update single row of the table: "experiments_project_nodes" */
  update_experiments_project_nodes_by_pk?: Maybe<Experiments_Project_Nodes>;
  /** update data of the table: "measurement_biofile" */
  update_measurement_biofile?: Maybe<Measurement_Biofile_Mutation_Response>;
  /** update single row of the table: "measurement_biofile" */
  update_measurement_biofile_by_pk?: Maybe<Measurement_Biofile>;
  /** update data of the table: "measurement_taskuser" */
  update_measurement_taskuser?: Maybe<Measurement_Taskuser_Mutation_Response>;
  /** update single row of the table: "measurement_taskuser" */
  update_measurement_taskuser_by_pk?: Maybe<Measurement_Taskuser>;
  /** update data of the table: "measurement_taskuser_task_files" */
  update_measurement_taskuser_task_files?: Maybe<Measurement_Taskuser_Task_Files_Mutation_Response>;
  /** update single row of the table: "measurement_taskuser_task_files" */
  update_measurement_taskuser_task_files_by_pk?: Maybe<Measurement_Taskuser_Task_Files>;
  /** update data of the table: "part" */
  update_part?: Maybe<Part_Mutation_Response>;
  /** update single row of the table: "part" */
  update_part_by_pk?: Maybe<Part>;
  /** update data of the table: "part_type" */
  update_part_type?: Maybe<Part_Type_Mutation_Response>;
  /** update single row of the table: "part_type" */
  update_part_type_by_pk?: Maybe<Part_Type>;
  /** update data of the table: "parts_catalog_experimentnode" */
  update_parts_catalog_experimentnode?: Maybe<Parts_Catalog_Experimentnode_Mutation_Response>;
  /** update single row of the table: "parts_catalog_experimentnode" */
  update_parts_catalog_experimentnode_by_pk?: Maybe<Parts_Catalog_Experimentnode>;
  /** update data of the table: "parts_catalog_node" */
  update_parts_catalog_node?: Maybe<Parts_Catalog_Node_Mutation_Response>;
  /** update single row of the table: "parts_catalog_node" */
  update_parts_catalog_node_by_pk?: Maybe<Parts_Catalog_Node>;
  /** update data of the table: "parts_catalog_noderelation" */
  update_parts_catalog_noderelation?: Maybe<Parts_Catalog_Noderelation_Mutation_Response>;
  /** update single row of the table: "parts_catalog_noderelation" */
  update_parts_catalog_noderelation_by_pk?: Maybe<Parts_Catalog_Noderelation>;
  /** update data of the table: "parts_catalog_simulationnode" */
  update_parts_catalog_simulationnode?: Maybe<Parts_Catalog_Simulationnode_Mutation_Response>;
  /** update single row of the table: "parts_catalog_simulationnode" */
  update_parts_catalog_simulationnode_by_pk?: Maybe<Parts_Catalog_Simulationnode>;
  /** update data of the table: "project" */
  update_project?: Maybe<Project_Mutation_Response>;
  /** update single row of the table: "project" */
  update_project_by_pk?: Maybe<Project>;
  /** update data of the table: "project_construct" */
  update_project_construct?: Maybe<Project_Construct_Mutation_Response>;
  /** update single row of the table: "project_construct" */
  update_project_construct_by_pk?: Maybe<Project_Construct>;
  /** update data of the table: "simulation_simulationresult" */
  update_simulation_simulationresult?: Maybe<Simulation_Simulationresult_Mutation_Response>;
  /** update single row of the table: "simulation_simulationresult" */
  update_simulation_simulationresult_by_pk?: Maybe<Simulation_Simulationresult>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
  /** update data of the table: "users_customuser" */
  update_users_customuser?: Maybe<Users_Customuser_Mutation_Response>;
  /** update single row of the table: "users_customuser" */
  update_users_customuser_by_pk?: Maybe<Users_Customuser>;
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
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Django_Celery_Results_TaskresultArgs = {
  where: Django_Celery_Results_Taskresult_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Django_Celery_Results_Taskresult_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_Experiments_ExperimentArgs = {
  where: Experiments_Experiment_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Experiments_Experiment_AnalysesArgs = {
  where: Experiments_Experiment_Analyses_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Experiments_Experiment_Analyses_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_Experiments_Experiment_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Experiments_Experiment_FilesArgs = {
  where: Experiments_Experiment_Files_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Experiments_Experiment_Files_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_Experiments_FigureArgs = {
  where: Experiments_Figure_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Experiments_Figure_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Experiments_ProjectArgs = {
  where: Experiments_Project_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Experiments_Project_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Experiments_Project_ExperimentsArgs = {
  where: Experiments_Project_Experiments_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Experiments_Project_Experiments_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_Experiments_Project_NodesArgs = {
  where: Experiments_Project_Nodes_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Experiments_Project_Nodes_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_Measurement_BiofileArgs = {
  where: Measurement_Biofile_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Measurement_Biofile_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Measurement_TaskuserArgs = {
  where: Measurement_Taskuser_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Measurement_Taskuser_By_PkArgs = {
  task_id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Measurement_Taskuser_Task_FilesArgs = {
  where: Measurement_Taskuser_Task_Files_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Measurement_Taskuser_Task_Files_By_PkArgs = {
  id: Scalars['Int'];
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
export type Mutation_RootDelete_Part_TypeArgs = {
  where: Part_Type_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Part_Type_By_PkArgs = {
  name: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDelete_Parts_Catalog_ExperimentnodeArgs = {
  where: Parts_Catalog_Experimentnode_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Parts_Catalog_Experimentnode_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Parts_Catalog_NodeArgs = {
  where: Parts_Catalog_Node_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Parts_Catalog_Node_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Parts_Catalog_NoderelationArgs = {
  where: Parts_Catalog_Noderelation_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Parts_Catalog_Noderelation_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_Parts_Catalog_SimulationnodeArgs = {
  where: Parts_Catalog_Simulationnode_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Parts_Catalog_Simulationnode_By_PkArgs = {
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
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Simulation_SimulationresultArgs = {
  where: Simulation_Simulationresult_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Simulation_Simulationresult_By_PkArgs = {
  id: Scalars['uuid'];
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
export type Mutation_RootDelete_Users_CustomuserArgs = {
  where: Users_Customuser_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Users_Customuser_By_PkArgs = {
  id: Scalars['Int'];
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
export type Mutation_RootInsert_Django_Celery_Results_TaskresultArgs = {
  objects: Array<Django_Celery_Results_Taskresult_Insert_Input>;
  on_conflict?: Maybe<Django_Celery_Results_Taskresult_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Django_Celery_Results_Taskresult_OneArgs = {
  object: Django_Celery_Results_Taskresult_Insert_Input;
  on_conflict?: Maybe<Django_Celery_Results_Taskresult_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Experiments_ExperimentArgs = {
  objects: Array<Experiments_Experiment_Insert_Input>;
  on_conflict?: Maybe<Experiments_Experiment_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Experiments_Experiment_AnalysesArgs = {
  objects: Array<Experiments_Experiment_Analyses_Insert_Input>;
  on_conflict?: Maybe<Experiments_Experiment_Analyses_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Experiments_Experiment_Analyses_OneArgs = {
  object: Experiments_Experiment_Analyses_Insert_Input;
  on_conflict?: Maybe<Experiments_Experiment_Analyses_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Experiments_Experiment_FilesArgs = {
  objects: Array<Experiments_Experiment_Files_Insert_Input>;
  on_conflict?: Maybe<Experiments_Experiment_Files_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Experiments_Experiment_Files_OneArgs = {
  object: Experiments_Experiment_Files_Insert_Input;
  on_conflict?: Maybe<Experiments_Experiment_Files_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Experiments_Experiment_OneArgs = {
  object: Experiments_Experiment_Insert_Input;
  on_conflict?: Maybe<Experiments_Experiment_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Experiments_FigureArgs = {
  objects: Array<Experiments_Figure_Insert_Input>;
  on_conflict?: Maybe<Experiments_Figure_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Experiments_Figure_OneArgs = {
  object: Experiments_Figure_Insert_Input;
  on_conflict?: Maybe<Experiments_Figure_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Experiments_ProjectArgs = {
  objects: Array<Experiments_Project_Insert_Input>;
  on_conflict?: Maybe<Experiments_Project_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Experiments_Project_ExperimentsArgs = {
  objects: Array<Experiments_Project_Experiments_Insert_Input>;
  on_conflict?: Maybe<Experiments_Project_Experiments_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Experiments_Project_Experiments_OneArgs = {
  object: Experiments_Project_Experiments_Insert_Input;
  on_conflict?: Maybe<Experiments_Project_Experiments_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Experiments_Project_NodesArgs = {
  objects: Array<Experiments_Project_Nodes_Insert_Input>;
  on_conflict?: Maybe<Experiments_Project_Nodes_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Experiments_Project_Nodes_OneArgs = {
  object: Experiments_Project_Nodes_Insert_Input;
  on_conflict?: Maybe<Experiments_Project_Nodes_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Experiments_Project_OneArgs = {
  object: Experiments_Project_Insert_Input;
  on_conflict?: Maybe<Experiments_Project_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Measurement_BiofileArgs = {
  objects: Array<Measurement_Biofile_Insert_Input>;
  on_conflict?: Maybe<Measurement_Biofile_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Measurement_Biofile_OneArgs = {
  object: Measurement_Biofile_Insert_Input;
  on_conflict?: Maybe<Measurement_Biofile_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Measurement_TaskuserArgs = {
  objects: Array<Measurement_Taskuser_Insert_Input>;
  on_conflict?: Maybe<Measurement_Taskuser_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Measurement_Taskuser_OneArgs = {
  object: Measurement_Taskuser_Insert_Input;
  on_conflict?: Maybe<Measurement_Taskuser_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Measurement_Taskuser_Task_FilesArgs = {
  objects: Array<Measurement_Taskuser_Task_Files_Insert_Input>;
  on_conflict?: Maybe<Measurement_Taskuser_Task_Files_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Measurement_Taskuser_Task_Files_OneArgs = {
  object: Measurement_Taskuser_Task_Files_Insert_Input;
  on_conflict?: Maybe<Measurement_Taskuser_Task_Files_On_Conflict>;
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
export type Mutation_RootInsert_Part_TypeArgs = {
  objects: Array<Part_Type_Insert_Input>;
  on_conflict?: Maybe<Part_Type_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Part_Type_OneArgs = {
  object: Part_Type_Insert_Input;
  on_conflict?: Maybe<Part_Type_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Parts_Catalog_ExperimentnodeArgs = {
  objects: Array<Parts_Catalog_Experimentnode_Insert_Input>;
  on_conflict?: Maybe<Parts_Catalog_Experimentnode_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Parts_Catalog_Experimentnode_OneArgs = {
  object: Parts_Catalog_Experimentnode_Insert_Input;
  on_conflict?: Maybe<Parts_Catalog_Experimentnode_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Parts_Catalog_NodeArgs = {
  objects: Array<Parts_Catalog_Node_Insert_Input>;
  on_conflict?: Maybe<Parts_Catalog_Node_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Parts_Catalog_Node_OneArgs = {
  object: Parts_Catalog_Node_Insert_Input;
  on_conflict?: Maybe<Parts_Catalog_Node_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Parts_Catalog_NoderelationArgs = {
  objects: Array<Parts_Catalog_Noderelation_Insert_Input>;
  on_conflict?: Maybe<Parts_Catalog_Noderelation_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Parts_Catalog_Noderelation_OneArgs = {
  object: Parts_Catalog_Noderelation_Insert_Input;
  on_conflict?: Maybe<Parts_Catalog_Noderelation_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Parts_Catalog_SimulationnodeArgs = {
  objects: Array<Parts_Catalog_Simulationnode_Insert_Input>;
  on_conflict?: Maybe<Parts_Catalog_Simulationnode_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Parts_Catalog_Simulationnode_OneArgs = {
  object: Parts_Catalog_Simulationnode_Insert_Input;
  on_conflict?: Maybe<Parts_Catalog_Simulationnode_On_Conflict>;
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
export type Mutation_RootInsert_Simulation_SimulationresultArgs = {
  objects: Array<Simulation_Simulationresult_Insert_Input>;
  on_conflict?: Maybe<Simulation_Simulationresult_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Simulation_Simulationresult_OneArgs = {
  object: Simulation_Simulationresult_Insert_Input;
  on_conflict?: Maybe<Simulation_Simulationresult_On_Conflict>;
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
export type Mutation_RootInsert_Users_CustomuserArgs = {
  objects: Array<Users_Customuser_Insert_Input>;
  on_conflict?: Maybe<Users_Customuser_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Users_Customuser_OneArgs = {
  object: Users_Customuser_Insert_Input;
  on_conflict?: Maybe<Users_Customuser_On_Conflict>;
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
  _inc?: Maybe<Construct_Part_Inc_Input>;
  _set?: Maybe<Construct_Part_Set_Input>;
  where: Construct_Part_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Construct_Part_By_PkArgs = {
  _inc?: Maybe<Construct_Part_Inc_Input>;
  _set?: Maybe<Construct_Part_Set_Input>;
  pk_columns: Construct_Part_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Django_Celery_Results_TaskresultArgs = {
  _inc?: Maybe<Django_Celery_Results_Taskresult_Inc_Input>;
  _set?: Maybe<Django_Celery_Results_Taskresult_Set_Input>;
  where: Django_Celery_Results_Taskresult_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Django_Celery_Results_Taskresult_By_PkArgs = {
  _inc?: Maybe<Django_Celery_Results_Taskresult_Inc_Input>;
  _set?: Maybe<Django_Celery_Results_Taskresult_Set_Input>;
  pk_columns: Django_Celery_Results_Taskresult_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Experiments_ExperimentArgs = {
  _inc?: Maybe<Experiments_Experiment_Inc_Input>;
  _set?: Maybe<Experiments_Experiment_Set_Input>;
  where: Experiments_Experiment_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Experiments_Experiment_AnalysesArgs = {
  _inc?: Maybe<Experiments_Experiment_Analyses_Inc_Input>;
  _set?: Maybe<Experiments_Experiment_Analyses_Set_Input>;
  where: Experiments_Experiment_Analyses_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Experiments_Experiment_Analyses_By_PkArgs = {
  _inc?: Maybe<Experiments_Experiment_Analyses_Inc_Input>;
  _set?: Maybe<Experiments_Experiment_Analyses_Set_Input>;
  pk_columns: Experiments_Experiment_Analyses_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Experiments_Experiment_By_PkArgs = {
  _inc?: Maybe<Experiments_Experiment_Inc_Input>;
  _set?: Maybe<Experiments_Experiment_Set_Input>;
  pk_columns: Experiments_Experiment_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Experiments_Experiment_FilesArgs = {
  _inc?: Maybe<Experiments_Experiment_Files_Inc_Input>;
  _set?: Maybe<Experiments_Experiment_Files_Set_Input>;
  where: Experiments_Experiment_Files_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Experiments_Experiment_Files_By_PkArgs = {
  _inc?: Maybe<Experiments_Experiment_Files_Inc_Input>;
  _set?: Maybe<Experiments_Experiment_Files_Set_Input>;
  pk_columns: Experiments_Experiment_Files_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Experiments_FigureArgs = {
  _inc?: Maybe<Experiments_Figure_Inc_Input>;
  _set?: Maybe<Experiments_Figure_Set_Input>;
  where: Experiments_Figure_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Experiments_Figure_By_PkArgs = {
  _inc?: Maybe<Experiments_Figure_Inc_Input>;
  _set?: Maybe<Experiments_Figure_Set_Input>;
  pk_columns: Experiments_Figure_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Experiments_ProjectArgs = {
  _inc?: Maybe<Experiments_Project_Inc_Input>;
  _set?: Maybe<Experiments_Project_Set_Input>;
  where: Experiments_Project_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Experiments_Project_By_PkArgs = {
  _inc?: Maybe<Experiments_Project_Inc_Input>;
  _set?: Maybe<Experiments_Project_Set_Input>;
  pk_columns: Experiments_Project_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Experiments_Project_ExperimentsArgs = {
  _inc?: Maybe<Experiments_Project_Experiments_Inc_Input>;
  _set?: Maybe<Experiments_Project_Experiments_Set_Input>;
  where: Experiments_Project_Experiments_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Experiments_Project_Experiments_By_PkArgs = {
  _inc?: Maybe<Experiments_Project_Experiments_Inc_Input>;
  _set?: Maybe<Experiments_Project_Experiments_Set_Input>;
  pk_columns: Experiments_Project_Experiments_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Experiments_Project_NodesArgs = {
  _inc?: Maybe<Experiments_Project_Nodes_Inc_Input>;
  _set?: Maybe<Experiments_Project_Nodes_Set_Input>;
  where: Experiments_Project_Nodes_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Experiments_Project_Nodes_By_PkArgs = {
  _inc?: Maybe<Experiments_Project_Nodes_Inc_Input>;
  _set?: Maybe<Experiments_Project_Nodes_Set_Input>;
  pk_columns: Experiments_Project_Nodes_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Measurement_BiofileArgs = {
  _inc?: Maybe<Measurement_Biofile_Inc_Input>;
  _set?: Maybe<Measurement_Biofile_Set_Input>;
  where: Measurement_Biofile_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Measurement_Biofile_By_PkArgs = {
  _inc?: Maybe<Measurement_Biofile_Inc_Input>;
  _set?: Maybe<Measurement_Biofile_Set_Input>;
  pk_columns: Measurement_Biofile_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Measurement_TaskuserArgs = {
  _inc?: Maybe<Measurement_Taskuser_Inc_Input>;
  _set?: Maybe<Measurement_Taskuser_Set_Input>;
  where: Measurement_Taskuser_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Measurement_Taskuser_By_PkArgs = {
  _inc?: Maybe<Measurement_Taskuser_Inc_Input>;
  _set?: Maybe<Measurement_Taskuser_Set_Input>;
  pk_columns: Measurement_Taskuser_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Measurement_Taskuser_Task_FilesArgs = {
  _inc?: Maybe<Measurement_Taskuser_Task_Files_Inc_Input>;
  _set?: Maybe<Measurement_Taskuser_Task_Files_Set_Input>;
  where: Measurement_Taskuser_Task_Files_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Measurement_Taskuser_Task_Files_By_PkArgs = {
  _inc?: Maybe<Measurement_Taskuser_Task_Files_Inc_Input>;
  _set?: Maybe<Measurement_Taskuser_Task_Files_Set_Input>;
  pk_columns: Measurement_Taskuser_Task_Files_Pk_Columns_Input;
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
export type Mutation_RootUpdate_Part_TypeArgs = {
  _inc?: Maybe<Part_Type_Inc_Input>;
  _set?: Maybe<Part_Type_Set_Input>;
  where: Part_Type_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Part_Type_By_PkArgs = {
  _inc?: Maybe<Part_Type_Inc_Input>;
  _set?: Maybe<Part_Type_Set_Input>;
  pk_columns: Part_Type_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Parts_Catalog_ExperimentnodeArgs = {
  _inc?: Maybe<Parts_Catalog_Experimentnode_Inc_Input>;
  _set?: Maybe<Parts_Catalog_Experimentnode_Set_Input>;
  where: Parts_Catalog_Experimentnode_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Parts_Catalog_Experimentnode_By_PkArgs = {
  _inc?: Maybe<Parts_Catalog_Experimentnode_Inc_Input>;
  _set?: Maybe<Parts_Catalog_Experimentnode_Set_Input>;
  pk_columns: Parts_Catalog_Experimentnode_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Parts_Catalog_NodeArgs = {
  _inc?: Maybe<Parts_Catalog_Node_Inc_Input>;
  _set?: Maybe<Parts_Catalog_Node_Set_Input>;
  where: Parts_Catalog_Node_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Parts_Catalog_Node_By_PkArgs = {
  _inc?: Maybe<Parts_Catalog_Node_Inc_Input>;
  _set?: Maybe<Parts_Catalog_Node_Set_Input>;
  pk_columns: Parts_Catalog_Node_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Parts_Catalog_NoderelationArgs = {
  _inc?: Maybe<Parts_Catalog_Noderelation_Inc_Input>;
  _set?: Maybe<Parts_Catalog_Noderelation_Set_Input>;
  where: Parts_Catalog_Noderelation_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Parts_Catalog_Noderelation_By_PkArgs = {
  _inc?: Maybe<Parts_Catalog_Noderelation_Inc_Input>;
  _set?: Maybe<Parts_Catalog_Noderelation_Set_Input>;
  pk_columns: Parts_Catalog_Noderelation_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Parts_Catalog_SimulationnodeArgs = {
  _inc?: Maybe<Parts_Catalog_Simulationnode_Inc_Input>;
  _set?: Maybe<Parts_Catalog_Simulationnode_Set_Input>;
  where: Parts_Catalog_Simulationnode_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Parts_Catalog_Simulationnode_By_PkArgs = {
  _inc?: Maybe<Parts_Catalog_Simulationnode_Inc_Input>;
  _set?: Maybe<Parts_Catalog_Simulationnode_Set_Input>;
  pk_columns: Parts_Catalog_Simulationnode_Pk_Columns_Input;
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
export type Mutation_RootUpdate_Simulation_SimulationresultArgs = {
  _inc?: Maybe<Simulation_Simulationresult_Inc_Input>;
  _set?: Maybe<Simulation_Simulationresult_Set_Input>;
  where: Simulation_Simulationresult_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Simulation_Simulationresult_By_PkArgs = {
  _inc?: Maybe<Simulation_Simulationresult_Inc_Input>;
  _set?: Maybe<Simulation_Simulationresult_Set_Input>;
  pk_columns: Simulation_Simulationresult_Pk_Columns_Input;
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

/** mutation root */
export type Mutation_RootUpdate_Users_CustomuserArgs = {
  _inc?: Maybe<Users_Customuser_Inc_Input>;
  _set?: Maybe<Users_Customuser_Set_Input>;
  where: Users_Customuser_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Users_Customuser_By_PkArgs = {
  _inc?: Maybe<Users_Customuser_Inc_Input>;
  _set?: Maybe<Users_Customuser_Set_Input>;
  pk_columns: Users_Customuser_Pk_Columns_Input;
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
  DescNullsLast = 'desc_nulls_last',
}

/** columns and relationships of "part" */
export type Part = {
  __typename?: 'part';
  alias?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  created_by_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  part_constructs: Array<Construct_Part>;
  /** An aggregate relationship */
  part_constructs_aggregate: Construct_Part_Aggregate;
  /** An object relationship */
  part_type?: Maybe<Part_Type>;
  part_type_id?: Maybe<Scalars['Int']>;
  sequence?: Maybe<Scalars['String']>;
  /** A computed field, executes function "sequence_length" */
  sequence_length?: Maybe<Scalars['Int']>;
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
  part_type_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "part". All fields are combined with a logical 'AND'. */
export type Part_Bool_Exp = {
  _and?: Maybe<Array<Part_Bool_Exp>>;
  _not?: Maybe<Part_Bool_Exp>;
  _or?: Maybe<Array<Part_Bool_Exp>>;
  alias?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  created_by_id?: Maybe<Int_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  part_constructs?: Maybe<Construct_Part_Bool_Exp>;
  part_type?: Maybe<Part_Type_Bool_Exp>;
  part_type_id?: Maybe<Int_Comparison_Exp>;
  sequence?: Maybe<String_Comparison_Exp>;
  sequence_length?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
};

/** unique or primary key constraints on table "part" */
export enum Part_Constraint {
  /** unique or primary key constraint */
  PartPkey = 'part_pkey',
}

/** input type for incrementing numeric columns in table "part" */
export type Part_Inc_Input = {
  created_by_id?: Maybe<Scalars['Int']>;
  part_type_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "part" */
export type Part_Insert_Input = {
  alias?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  part_constructs?: Maybe<Construct_Part_Arr_Rel_Insert_Input>;
  part_type?: Maybe<Part_Type_Obj_Rel_Insert_Input>;
  part_type_id?: Maybe<Scalars['Int']>;
  sequence?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Part_Max_Fields = {
  __typename?: 'part_max_fields';
  alias?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  part_type_id?: Maybe<Scalars['Int']>;
  sequence?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Part_Min_Fields = {
  __typename?: 'part_min_fields';
  alias?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  part_type_id?: Maybe<Scalars['Int']>;
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
  alias?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  part_constructs_aggregate?: Maybe<Construct_Part_Aggregate_Order_By>;
  part_type?: Maybe<Part_Type_Order_By>;
  part_type_id?: Maybe<Order_By>;
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
  Alias = 'alias',
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
  PartTypeId = 'part_type_id',
  /** column name */
  Sequence = 'sequence',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "part" */
export type Part_Set_Input = {
  alias?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  part_type_id?: Maybe<Scalars['Int']>;
  sequence?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Part_Stddev_Fields = {
  __typename?: 'part_stddev_fields';
  created_by_id?: Maybe<Scalars['Float']>;
  part_type_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Part_Stddev_Pop_Fields = {
  __typename?: 'part_stddev_pop_fields';
  created_by_id?: Maybe<Scalars['Float']>;
  part_type_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Part_Stddev_Samp_Fields = {
  __typename?: 'part_stddev_samp_fields';
  created_by_id?: Maybe<Scalars['Float']>;
  part_type_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Part_Sum_Fields = {
  __typename?: 'part_sum_fields';
  created_by_id?: Maybe<Scalars['Int']>;
  part_type_id?: Maybe<Scalars['Int']>;
};

/** columns and relationships of "part_type" */
export type Part_Type = {
  __typename?: 'part_type';
  description: Scalars['String'];
  glyph?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  /** A computed field, executes function "slugify_name" */
  slug?: Maybe<Scalars['String']>;
};

/** aggregated selection of "part_type" */
export type Part_Type_Aggregate = {
  __typename?: 'part_type_aggregate';
  aggregate?: Maybe<Part_Type_Aggregate_Fields>;
  nodes: Array<Part_Type>;
};

/** aggregate fields of "part_type" */
export type Part_Type_Aggregate_Fields = {
  __typename?: 'part_type_aggregate_fields';
  avg?: Maybe<Part_Type_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Part_Type_Max_Fields>;
  min?: Maybe<Part_Type_Min_Fields>;
  stddev?: Maybe<Part_Type_Stddev_Fields>;
  stddev_pop?: Maybe<Part_Type_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Part_Type_Stddev_Samp_Fields>;
  sum?: Maybe<Part_Type_Sum_Fields>;
  var_pop?: Maybe<Part_Type_Var_Pop_Fields>;
  var_samp?: Maybe<Part_Type_Var_Samp_Fields>;
  variance?: Maybe<Part_Type_Variance_Fields>;
};

/** aggregate fields of "part_type" */
export type Part_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Part_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Part_Type_Avg_Fields = {
  __typename?: 'part_type_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "part_type". All fields are combined with a logical 'AND'. */
export type Part_Type_Bool_Exp = {
  _and?: Maybe<Array<Part_Type_Bool_Exp>>;
  _not?: Maybe<Part_Type_Bool_Exp>;
  _or?: Maybe<Array<Part_Type_Bool_Exp>>;
  description?: Maybe<String_Comparison_Exp>;
  glyph?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  slug?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "part_type" */
export enum Part_Type_Constraint {
  /** unique or primary key constraint */
  PartTypeIdKey = 'part_type_id_key',
  /** unique or primary key constraint */
  PartTypePkey = 'part_type_pkey',
}

/** input type for incrementing numeric columns in table "part_type" */
export type Part_Type_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "part_type" */
export type Part_Type_Insert_Input = {
  description?: Maybe<Scalars['String']>;
  glyph?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Part_Type_Max_Fields = {
  __typename?: 'part_type_max_fields';
  description?: Maybe<Scalars['String']>;
  glyph?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Part_Type_Min_Fields = {
  __typename?: 'part_type_min_fields';
  description?: Maybe<Scalars['String']>;
  glyph?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "part_type" */
export type Part_Type_Mutation_Response = {
  __typename?: 'part_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Part_Type>;
};

/** input type for inserting object relation for remote table "part_type" */
export type Part_Type_Obj_Rel_Insert_Input = {
  data: Part_Type_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Part_Type_On_Conflict>;
};

/** on conflict condition type for table "part_type" */
export type Part_Type_On_Conflict = {
  constraint: Part_Type_Constraint;
  update_columns?: Array<Part_Type_Update_Column>;
  where?: Maybe<Part_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "part_type". */
export type Part_Type_Order_By = {
  description?: Maybe<Order_By>;
  glyph?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: part_type */
export type Part_Type_Pk_Columns_Input = {
  name: Scalars['String'];
};

/** select columns of table "part_type" */
export enum Part_Type_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Glyph = 'glyph',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "part_type" */
export type Part_Type_Set_Input = {
  description?: Maybe<Scalars['String']>;
  glyph?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Part_Type_Stddev_Fields = {
  __typename?: 'part_type_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Part_Type_Stddev_Pop_Fields = {
  __typename?: 'part_type_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Part_Type_Stddev_Samp_Fields = {
  __typename?: 'part_type_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Part_Type_Sum_Fields = {
  __typename?: 'part_type_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "part_type" */
export enum Part_Type_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Glyph = 'glyph',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

/** aggregate var_pop on columns */
export type Part_Type_Var_Pop_Fields = {
  __typename?: 'part_type_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Part_Type_Var_Samp_Fields = {
  __typename?: 'part_type_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Part_Type_Variance_Fields = {
  __typename?: 'part_type_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** update columns of table "part" */
export enum Part_Update_Column {
  /** column name */
  Alias = 'alias',
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
  PartTypeId = 'part_type_id',
  /** column name */
  Sequence = 'sequence',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Part_Var_Pop_Fields = {
  __typename?: 'part_var_pop_fields';
  created_by_id?: Maybe<Scalars['Float']>;
  part_type_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Part_Var_Samp_Fields = {
  __typename?: 'part_var_samp_fields';
  created_by_id?: Maybe<Scalars['Float']>;
  part_type_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Part_Variance_Fields = {
  __typename?: 'part_variance_fields';
  created_by_id?: Maybe<Scalars['Float']>;
  part_type_id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "parts_catalog_experimentnode" */
export type Parts_Catalog_Experimentnode = {
  __typename?: 'parts_catalog_experimentnode';
  created_by_id?: Maybe<Scalars['Int']>;
  date_created: Scalars['timestamptz'];
  experiment_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  experiments_experiment?: Maybe<Experiments_Experiment>;
  id: Scalars['uuid'];
  node_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  parts_catalog_node?: Maybe<Parts_Catalog_Node>;
  /** An object relationship */
  users_customuser?: Maybe<Users_Customuser>;
};

/** aggregated selection of "parts_catalog_experimentnode" */
export type Parts_Catalog_Experimentnode_Aggregate = {
  __typename?: 'parts_catalog_experimentnode_aggregate';
  aggregate?: Maybe<Parts_Catalog_Experimentnode_Aggregate_Fields>;
  nodes: Array<Parts_Catalog_Experimentnode>;
};

/** aggregate fields of "parts_catalog_experimentnode" */
export type Parts_Catalog_Experimentnode_Aggregate_Fields = {
  __typename?: 'parts_catalog_experimentnode_aggregate_fields';
  avg?: Maybe<Parts_Catalog_Experimentnode_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Parts_Catalog_Experimentnode_Max_Fields>;
  min?: Maybe<Parts_Catalog_Experimentnode_Min_Fields>;
  stddev?: Maybe<Parts_Catalog_Experimentnode_Stddev_Fields>;
  stddev_pop?: Maybe<Parts_Catalog_Experimentnode_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Parts_Catalog_Experimentnode_Stddev_Samp_Fields>;
  sum?: Maybe<Parts_Catalog_Experimentnode_Sum_Fields>;
  var_pop?: Maybe<Parts_Catalog_Experimentnode_Var_Pop_Fields>;
  var_samp?: Maybe<Parts_Catalog_Experimentnode_Var_Samp_Fields>;
  variance?: Maybe<Parts_Catalog_Experimentnode_Variance_Fields>;
};

/** aggregate fields of "parts_catalog_experimentnode" */
export type Parts_Catalog_Experimentnode_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Parts_Catalog_Experimentnode_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "parts_catalog_experimentnode" */
export type Parts_Catalog_Experimentnode_Aggregate_Order_By = {
  avg?: Maybe<Parts_Catalog_Experimentnode_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Parts_Catalog_Experimentnode_Max_Order_By>;
  min?: Maybe<Parts_Catalog_Experimentnode_Min_Order_By>;
  stddev?: Maybe<Parts_Catalog_Experimentnode_Stddev_Order_By>;
  stddev_pop?: Maybe<Parts_Catalog_Experimentnode_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Parts_Catalog_Experimentnode_Stddev_Samp_Order_By>;
  sum?: Maybe<Parts_Catalog_Experimentnode_Sum_Order_By>;
  var_pop?: Maybe<Parts_Catalog_Experimentnode_Var_Pop_Order_By>;
  var_samp?: Maybe<Parts_Catalog_Experimentnode_Var_Samp_Order_By>;
  variance?: Maybe<Parts_Catalog_Experimentnode_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "parts_catalog_experimentnode" */
export type Parts_Catalog_Experimentnode_Arr_Rel_Insert_Input = {
  data: Array<Parts_Catalog_Experimentnode_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Parts_Catalog_Experimentnode_On_Conflict>;
};

/** aggregate avg on columns */
export type Parts_Catalog_Experimentnode_Avg_Fields = {
  __typename?: 'parts_catalog_experimentnode_avg_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "parts_catalog_experimentnode" */
export type Parts_Catalog_Experimentnode_Avg_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "parts_catalog_experimentnode". All fields are combined with a logical 'AND'. */
export type Parts_Catalog_Experimentnode_Bool_Exp = {
  _and?: Maybe<Array<Parts_Catalog_Experimentnode_Bool_Exp>>;
  _not?: Maybe<Parts_Catalog_Experimentnode_Bool_Exp>;
  _or?: Maybe<Array<Parts_Catalog_Experimentnode_Bool_Exp>>;
  created_by_id?: Maybe<Int_Comparison_Exp>;
  date_created?: Maybe<Timestamptz_Comparison_Exp>;
  experiment_id?: Maybe<Uuid_Comparison_Exp>;
  experiments_experiment?: Maybe<Experiments_Experiment_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  node_id?: Maybe<Uuid_Comparison_Exp>;
  parts_catalog_node?: Maybe<Parts_Catalog_Node_Bool_Exp>;
  users_customuser?: Maybe<Users_Customuser_Bool_Exp>;
};

/** unique or primary key constraints on table "parts_catalog_experimentnode" */
export enum Parts_Catalog_Experimentnode_Constraint {
  /** unique or primary key constraint */
  PartsCatalogExperimentnodePkey = 'parts_catalog_experimentnode_pkey',
}

/** input type for incrementing numeric columns in table "parts_catalog_experimentnode" */
export type Parts_Catalog_Experimentnode_Inc_Input = {
  created_by_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "parts_catalog_experimentnode" */
export type Parts_Catalog_Experimentnode_Insert_Input = {
  created_by_id?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['timestamptz']>;
  experiment_id?: Maybe<Scalars['uuid']>;
  experiments_experiment?: Maybe<Experiments_Experiment_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  node_id?: Maybe<Scalars['uuid']>;
  parts_catalog_node?: Maybe<Parts_Catalog_Node_Obj_Rel_Insert_Input>;
  users_customuser?: Maybe<Users_Customuser_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Parts_Catalog_Experimentnode_Max_Fields = {
  __typename?: 'parts_catalog_experimentnode_max_fields';
  created_by_id?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['timestamptz']>;
  experiment_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  node_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "parts_catalog_experimentnode" */
export type Parts_Catalog_Experimentnode_Max_Order_By = {
  created_by_id?: Maybe<Order_By>;
  date_created?: Maybe<Order_By>;
  experiment_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  node_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Parts_Catalog_Experimentnode_Min_Fields = {
  __typename?: 'parts_catalog_experimentnode_min_fields';
  created_by_id?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['timestamptz']>;
  experiment_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  node_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "parts_catalog_experimentnode" */
export type Parts_Catalog_Experimentnode_Min_Order_By = {
  created_by_id?: Maybe<Order_By>;
  date_created?: Maybe<Order_By>;
  experiment_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  node_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "parts_catalog_experimentnode" */
export type Parts_Catalog_Experimentnode_Mutation_Response = {
  __typename?: 'parts_catalog_experimentnode_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Parts_Catalog_Experimentnode>;
};

/** on conflict condition type for table "parts_catalog_experimentnode" */
export type Parts_Catalog_Experimentnode_On_Conflict = {
  constraint: Parts_Catalog_Experimentnode_Constraint;
  update_columns?: Array<Parts_Catalog_Experimentnode_Update_Column>;
  where?: Maybe<Parts_Catalog_Experimentnode_Bool_Exp>;
};

/** Ordering options when selecting data from "parts_catalog_experimentnode". */
export type Parts_Catalog_Experimentnode_Order_By = {
  created_by_id?: Maybe<Order_By>;
  date_created?: Maybe<Order_By>;
  experiment_id?: Maybe<Order_By>;
  experiments_experiment?: Maybe<Experiments_Experiment_Order_By>;
  id?: Maybe<Order_By>;
  node_id?: Maybe<Order_By>;
  parts_catalog_node?: Maybe<Parts_Catalog_Node_Order_By>;
  users_customuser?: Maybe<Users_Customuser_Order_By>;
};

/** primary key columns input for table: parts_catalog_experimentnode */
export type Parts_Catalog_Experimentnode_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "parts_catalog_experimentnode" */
export enum Parts_Catalog_Experimentnode_Select_Column {
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  DateCreated = 'date_created',
  /** column name */
  ExperimentId = 'experiment_id',
  /** column name */
  Id = 'id',
  /** column name */
  NodeId = 'node_id',
}

/** input type for updating data in table "parts_catalog_experimentnode" */
export type Parts_Catalog_Experimentnode_Set_Input = {
  created_by_id?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['timestamptz']>;
  experiment_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  node_id?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Parts_Catalog_Experimentnode_Stddev_Fields = {
  __typename?: 'parts_catalog_experimentnode_stddev_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "parts_catalog_experimentnode" */
export type Parts_Catalog_Experimentnode_Stddev_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Parts_Catalog_Experimentnode_Stddev_Pop_Fields = {
  __typename?: 'parts_catalog_experimentnode_stddev_pop_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "parts_catalog_experimentnode" */
export type Parts_Catalog_Experimentnode_Stddev_Pop_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Parts_Catalog_Experimentnode_Stddev_Samp_Fields = {
  __typename?: 'parts_catalog_experimentnode_stddev_samp_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "parts_catalog_experimentnode" */
export type Parts_Catalog_Experimentnode_Stddev_Samp_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Parts_Catalog_Experimentnode_Sum_Fields = {
  __typename?: 'parts_catalog_experimentnode_sum_fields';
  created_by_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "parts_catalog_experimentnode" */
export type Parts_Catalog_Experimentnode_Sum_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** update columns of table "parts_catalog_experimentnode" */
export enum Parts_Catalog_Experimentnode_Update_Column {
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  DateCreated = 'date_created',
  /** column name */
  ExperimentId = 'experiment_id',
  /** column name */
  Id = 'id',
  /** column name */
  NodeId = 'node_id',
}

/** aggregate var_pop on columns */
export type Parts_Catalog_Experimentnode_Var_Pop_Fields = {
  __typename?: 'parts_catalog_experimentnode_var_pop_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "parts_catalog_experimentnode" */
export type Parts_Catalog_Experimentnode_Var_Pop_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Parts_Catalog_Experimentnode_Var_Samp_Fields = {
  __typename?: 'parts_catalog_experimentnode_var_samp_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "parts_catalog_experimentnode" */
export type Parts_Catalog_Experimentnode_Var_Samp_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Parts_Catalog_Experimentnode_Variance_Fields = {
  __typename?: 'parts_catalog_experimentnode_variance_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "parts_catalog_experimentnode" */
export type Parts_Catalog_Experimentnode_Variance_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** columns and relationships of "parts_catalog_node" */
export type Parts_Catalog_Node = {
  __typename?: 'parts_catalog_node';
  created_by_id?: Maybe<Scalars['Int']>;
  date_created: Scalars['timestamptz'];
  description: Scalars['String'];
  display_name: Scalars['String'];
  /** An array relationship */
  experiments_project_nodes: Array<Experiments_Project_Nodes>;
  /** An aggregate relationship */
  experiments_project_nodes_aggregate: Experiments_Project_Nodes_Aggregate;
  id: Scalars['uuid'];
  logo_path: Scalars['String'];
  metadata: Scalars['String'];
  /** An array relationship */
  partsCatalogNoderelationsByParentNodeId: Array<Parts_Catalog_Noderelation>;
  /** An aggregate relationship */
  partsCatalogNoderelationsByParentNodeId_aggregate: Parts_Catalog_Noderelation_Aggregate;
  /** An array relationship */
  parts_catalog_experimentnodes: Array<Parts_Catalog_Experimentnode>;
  /** An aggregate relationship */
  parts_catalog_experimentnodes_aggregate: Parts_Catalog_Experimentnode_Aggregate;
  /** An array relationship */
  parts_catalog_noderelations: Array<Parts_Catalog_Noderelation>;
  /** An aggregate relationship */
  parts_catalog_noderelations_aggregate: Parts_Catalog_Noderelation_Aggregate;
  /** An array relationship */
  parts_catalog_simulationnodes: Array<Parts_Catalog_Simulationnode>;
  /** An aggregate relationship */
  parts_catalog_simulationnodes_aggregate: Parts_Catalog_Simulationnode_Aggregate;
  sbol: Scalars['String'];
  sequence: Scalars['String'];
  slug: Scalars['String'];
  type: Scalars['String'];
  /** An object relationship */
  users_customuser?: Maybe<Users_Customuser>;
};

/** columns and relationships of "parts_catalog_node" */
export type Parts_Catalog_NodeExperiments_Project_NodesArgs = {
  distinct_on?: Maybe<Array<Experiments_Project_Nodes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Project_Nodes_Order_By>>;
  where?: Maybe<Experiments_Project_Nodes_Bool_Exp>;
};

/** columns and relationships of "parts_catalog_node" */
export type Parts_Catalog_NodeExperiments_Project_Nodes_AggregateArgs = {
  distinct_on?: Maybe<Array<Experiments_Project_Nodes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Project_Nodes_Order_By>>;
  where?: Maybe<Experiments_Project_Nodes_Bool_Exp>;
};

/** columns and relationships of "parts_catalog_node" */
export type Parts_Catalog_NodePartsCatalogNoderelationsByParentNodeIdArgs = {
  distinct_on?: Maybe<Array<Parts_Catalog_Noderelation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parts_Catalog_Noderelation_Order_By>>;
  where?: Maybe<Parts_Catalog_Noderelation_Bool_Exp>;
};

/** columns and relationships of "parts_catalog_node" */
export type Parts_Catalog_NodePartsCatalogNoderelationsByParentNodeId_AggregateArgs =
  {
    distinct_on?: Maybe<Array<Parts_Catalog_Noderelation_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Parts_Catalog_Noderelation_Order_By>>;
    where?: Maybe<Parts_Catalog_Noderelation_Bool_Exp>;
  };

/** columns and relationships of "parts_catalog_node" */
export type Parts_Catalog_NodeParts_Catalog_ExperimentnodesArgs = {
  distinct_on?: Maybe<Array<Parts_Catalog_Experimentnode_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parts_Catalog_Experimentnode_Order_By>>;
  where?: Maybe<Parts_Catalog_Experimentnode_Bool_Exp>;
};

/** columns and relationships of "parts_catalog_node" */
export type Parts_Catalog_NodeParts_Catalog_Experimentnodes_AggregateArgs = {
  distinct_on?: Maybe<Array<Parts_Catalog_Experimentnode_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parts_Catalog_Experimentnode_Order_By>>;
  where?: Maybe<Parts_Catalog_Experimentnode_Bool_Exp>;
};

/** columns and relationships of "parts_catalog_node" */
export type Parts_Catalog_NodeParts_Catalog_NoderelationsArgs = {
  distinct_on?: Maybe<Array<Parts_Catalog_Noderelation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parts_Catalog_Noderelation_Order_By>>;
  where?: Maybe<Parts_Catalog_Noderelation_Bool_Exp>;
};

/** columns and relationships of "parts_catalog_node" */
export type Parts_Catalog_NodeParts_Catalog_Noderelations_AggregateArgs = {
  distinct_on?: Maybe<Array<Parts_Catalog_Noderelation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parts_Catalog_Noderelation_Order_By>>;
  where?: Maybe<Parts_Catalog_Noderelation_Bool_Exp>;
};

/** columns and relationships of "parts_catalog_node" */
export type Parts_Catalog_NodeParts_Catalog_SimulationnodesArgs = {
  distinct_on?: Maybe<Array<Parts_Catalog_Simulationnode_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parts_Catalog_Simulationnode_Order_By>>;
  where?: Maybe<Parts_Catalog_Simulationnode_Bool_Exp>;
};

/** columns and relationships of "parts_catalog_node" */
export type Parts_Catalog_NodeParts_Catalog_Simulationnodes_AggregateArgs = {
  distinct_on?: Maybe<Array<Parts_Catalog_Simulationnode_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parts_Catalog_Simulationnode_Order_By>>;
  where?: Maybe<Parts_Catalog_Simulationnode_Bool_Exp>;
};

/** aggregated selection of "parts_catalog_node" */
export type Parts_Catalog_Node_Aggregate = {
  __typename?: 'parts_catalog_node_aggregate';
  aggregate?: Maybe<Parts_Catalog_Node_Aggregate_Fields>;
  nodes: Array<Parts_Catalog_Node>;
};

/** aggregate fields of "parts_catalog_node" */
export type Parts_Catalog_Node_Aggregate_Fields = {
  __typename?: 'parts_catalog_node_aggregate_fields';
  avg?: Maybe<Parts_Catalog_Node_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Parts_Catalog_Node_Max_Fields>;
  min?: Maybe<Parts_Catalog_Node_Min_Fields>;
  stddev?: Maybe<Parts_Catalog_Node_Stddev_Fields>;
  stddev_pop?: Maybe<Parts_Catalog_Node_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Parts_Catalog_Node_Stddev_Samp_Fields>;
  sum?: Maybe<Parts_Catalog_Node_Sum_Fields>;
  var_pop?: Maybe<Parts_Catalog_Node_Var_Pop_Fields>;
  var_samp?: Maybe<Parts_Catalog_Node_Var_Samp_Fields>;
  variance?: Maybe<Parts_Catalog_Node_Variance_Fields>;
};

/** aggregate fields of "parts_catalog_node" */
export type Parts_Catalog_Node_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Parts_Catalog_Node_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "parts_catalog_node" */
export type Parts_Catalog_Node_Aggregate_Order_By = {
  avg?: Maybe<Parts_Catalog_Node_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Parts_Catalog_Node_Max_Order_By>;
  min?: Maybe<Parts_Catalog_Node_Min_Order_By>;
  stddev?: Maybe<Parts_Catalog_Node_Stddev_Order_By>;
  stddev_pop?: Maybe<Parts_Catalog_Node_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Parts_Catalog_Node_Stddev_Samp_Order_By>;
  sum?: Maybe<Parts_Catalog_Node_Sum_Order_By>;
  var_pop?: Maybe<Parts_Catalog_Node_Var_Pop_Order_By>;
  var_samp?: Maybe<Parts_Catalog_Node_Var_Samp_Order_By>;
  variance?: Maybe<Parts_Catalog_Node_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "parts_catalog_node" */
export type Parts_Catalog_Node_Arr_Rel_Insert_Input = {
  data: Array<Parts_Catalog_Node_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Parts_Catalog_Node_On_Conflict>;
};

/** aggregate avg on columns */
export type Parts_Catalog_Node_Avg_Fields = {
  __typename?: 'parts_catalog_node_avg_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "parts_catalog_node" */
export type Parts_Catalog_Node_Avg_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "parts_catalog_node". All fields are combined with a logical 'AND'. */
export type Parts_Catalog_Node_Bool_Exp = {
  _and?: Maybe<Array<Parts_Catalog_Node_Bool_Exp>>;
  _not?: Maybe<Parts_Catalog_Node_Bool_Exp>;
  _or?: Maybe<Array<Parts_Catalog_Node_Bool_Exp>>;
  created_by_id?: Maybe<Int_Comparison_Exp>;
  date_created?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  display_name?: Maybe<String_Comparison_Exp>;
  experiments_project_nodes?: Maybe<Experiments_Project_Nodes_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  logo_path?: Maybe<String_Comparison_Exp>;
  metadata?: Maybe<String_Comparison_Exp>;
  partsCatalogNoderelationsByParentNodeId?: Maybe<Parts_Catalog_Noderelation_Bool_Exp>;
  parts_catalog_experimentnodes?: Maybe<Parts_Catalog_Experimentnode_Bool_Exp>;
  parts_catalog_noderelations?: Maybe<Parts_Catalog_Noderelation_Bool_Exp>;
  parts_catalog_simulationnodes?: Maybe<Parts_Catalog_Simulationnode_Bool_Exp>;
  sbol?: Maybe<String_Comparison_Exp>;
  sequence?: Maybe<String_Comparison_Exp>;
  slug?: Maybe<String_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  users_customuser?: Maybe<Users_Customuser_Bool_Exp>;
};

/** unique or primary key constraints on table "parts_catalog_node" */
export enum Parts_Catalog_Node_Constraint {
  /** unique or primary key constraint */
  PartsCatalogNodePkey = 'parts_catalog_node_pkey',
}

/** input type for incrementing numeric columns in table "parts_catalog_node" */
export type Parts_Catalog_Node_Inc_Input = {
  created_by_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "parts_catalog_node" */
export type Parts_Catalog_Node_Insert_Input = {
  created_by_id?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  experiments_project_nodes?: Maybe<Experiments_Project_Nodes_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  logo_path?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['String']>;
  partsCatalogNoderelationsByParentNodeId?: Maybe<Parts_Catalog_Noderelation_Arr_Rel_Insert_Input>;
  parts_catalog_experimentnodes?: Maybe<Parts_Catalog_Experimentnode_Arr_Rel_Insert_Input>;
  parts_catalog_noderelations?: Maybe<Parts_Catalog_Noderelation_Arr_Rel_Insert_Input>;
  parts_catalog_simulationnodes?: Maybe<Parts_Catalog_Simulationnode_Arr_Rel_Insert_Input>;
  sbol?: Maybe<Scalars['String']>;
  sequence?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  users_customuser?: Maybe<Users_Customuser_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Parts_Catalog_Node_Max_Fields = {
  __typename?: 'parts_catalog_node_max_fields';
  created_by_id?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  logo_path?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['String']>;
  sbol?: Maybe<Scalars['String']>;
  sequence?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "parts_catalog_node" */
export type Parts_Catalog_Node_Max_Order_By = {
  created_by_id?: Maybe<Order_By>;
  date_created?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logo_path?: Maybe<Order_By>;
  metadata?: Maybe<Order_By>;
  sbol?: Maybe<Order_By>;
  sequence?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Parts_Catalog_Node_Min_Fields = {
  __typename?: 'parts_catalog_node_min_fields';
  created_by_id?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  logo_path?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['String']>;
  sbol?: Maybe<Scalars['String']>;
  sequence?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "parts_catalog_node" */
export type Parts_Catalog_Node_Min_Order_By = {
  created_by_id?: Maybe<Order_By>;
  date_created?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logo_path?: Maybe<Order_By>;
  metadata?: Maybe<Order_By>;
  sbol?: Maybe<Order_By>;
  sequence?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** response of any mutation on the table "parts_catalog_node" */
export type Parts_Catalog_Node_Mutation_Response = {
  __typename?: 'parts_catalog_node_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Parts_Catalog_Node>;
};

/** input type for inserting object relation for remote table "parts_catalog_node" */
export type Parts_Catalog_Node_Obj_Rel_Insert_Input = {
  data: Parts_Catalog_Node_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Parts_Catalog_Node_On_Conflict>;
};

/** on conflict condition type for table "parts_catalog_node" */
export type Parts_Catalog_Node_On_Conflict = {
  constraint: Parts_Catalog_Node_Constraint;
  update_columns?: Array<Parts_Catalog_Node_Update_Column>;
  where?: Maybe<Parts_Catalog_Node_Bool_Exp>;
};

/** Ordering options when selecting data from "parts_catalog_node". */
export type Parts_Catalog_Node_Order_By = {
  created_by_id?: Maybe<Order_By>;
  date_created?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  experiments_project_nodes_aggregate?: Maybe<Experiments_Project_Nodes_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  logo_path?: Maybe<Order_By>;
  metadata?: Maybe<Order_By>;
  partsCatalogNoderelationsByParentNodeId_aggregate?: Maybe<Parts_Catalog_Noderelation_Aggregate_Order_By>;
  parts_catalog_experimentnodes_aggregate?: Maybe<Parts_Catalog_Experimentnode_Aggregate_Order_By>;
  parts_catalog_noderelations_aggregate?: Maybe<Parts_Catalog_Noderelation_Aggregate_Order_By>;
  parts_catalog_simulationnodes_aggregate?: Maybe<Parts_Catalog_Simulationnode_Aggregate_Order_By>;
  sbol?: Maybe<Order_By>;
  sequence?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  users_customuser?: Maybe<Users_Customuser_Order_By>;
};

/** primary key columns input for table: parts_catalog_node */
export type Parts_Catalog_Node_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "parts_catalog_node" */
export enum Parts_Catalog_Node_Select_Column {
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  DateCreated = 'date_created',
  /** column name */
  Description = 'description',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Id = 'id',
  /** column name */
  LogoPath = 'logo_path',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  Sbol = 'sbol',
  /** column name */
  Sequence = 'sequence',
  /** column name */
  Slug = 'slug',
  /** column name */
  Type = 'type',
}

/** input type for updating data in table "parts_catalog_node" */
export type Parts_Catalog_Node_Set_Input = {
  created_by_id?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  logo_path?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['String']>;
  sbol?: Maybe<Scalars['String']>;
  sequence?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Parts_Catalog_Node_Stddev_Fields = {
  __typename?: 'parts_catalog_node_stddev_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "parts_catalog_node" */
export type Parts_Catalog_Node_Stddev_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Parts_Catalog_Node_Stddev_Pop_Fields = {
  __typename?: 'parts_catalog_node_stddev_pop_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "parts_catalog_node" */
export type Parts_Catalog_Node_Stddev_Pop_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Parts_Catalog_Node_Stddev_Samp_Fields = {
  __typename?: 'parts_catalog_node_stddev_samp_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "parts_catalog_node" */
export type Parts_Catalog_Node_Stddev_Samp_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Parts_Catalog_Node_Sum_Fields = {
  __typename?: 'parts_catalog_node_sum_fields';
  created_by_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "parts_catalog_node" */
export type Parts_Catalog_Node_Sum_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** update columns of table "parts_catalog_node" */
export enum Parts_Catalog_Node_Update_Column {
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  DateCreated = 'date_created',
  /** column name */
  Description = 'description',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Id = 'id',
  /** column name */
  LogoPath = 'logo_path',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  Sbol = 'sbol',
  /** column name */
  Sequence = 'sequence',
  /** column name */
  Slug = 'slug',
  /** column name */
  Type = 'type',
}

/** aggregate var_pop on columns */
export type Parts_Catalog_Node_Var_Pop_Fields = {
  __typename?: 'parts_catalog_node_var_pop_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "parts_catalog_node" */
export type Parts_Catalog_Node_Var_Pop_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Parts_Catalog_Node_Var_Samp_Fields = {
  __typename?: 'parts_catalog_node_var_samp_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "parts_catalog_node" */
export type Parts_Catalog_Node_Var_Samp_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Parts_Catalog_Node_Variance_Fields = {
  __typename?: 'parts_catalog_node_variance_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "parts_catalog_node" */
export type Parts_Catalog_Node_Variance_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** columns and relationships of "parts_catalog_noderelation" */
export type Parts_Catalog_Noderelation = {
  __typename?: 'parts_catalog_noderelation';
  child_node_id?: Maybe<Scalars['uuid']>;
  created_by_id?: Maybe<Scalars['Int']>;
  date_created: Scalars['timestamptz'];
  id: Scalars['Int'];
  order: Scalars['Int'];
  parent_node_id?: Maybe<Scalars['uuid']>;
  parent_node_seq_end_position?: Maybe<Scalars['Int']>;
  parent_node_seq_start_position?: Maybe<Scalars['Int']>;
  /** An object relationship */
  partsCatalogNodeByParentNodeId?: Maybe<Parts_Catalog_Node>;
  /** An object relationship */
  parts_catalog_node?: Maybe<Parts_Catalog_Node>;
  /** An object relationship */
  users_customuser?: Maybe<Users_Customuser>;
};

/** aggregated selection of "parts_catalog_noderelation" */
export type Parts_Catalog_Noderelation_Aggregate = {
  __typename?: 'parts_catalog_noderelation_aggregate';
  aggregate?: Maybe<Parts_Catalog_Noderelation_Aggregate_Fields>;
  nodes: Array<Parts_Catalog_Noderelation>;
};

/** aggregate fields of "parts_catalog_noderelation" */
export type Parts_Catalog_Noderelation_Aggregate_Fields = {
  __typename?: 'parts_catalog_noderelation_aggregate_fields';
  avg?: Maybe<Parts_Catalog_Noderelation_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Parts_Catalog_Noderelation_Max_Fields>;
  min?: Maybe<Parts_Catalog_Noderelation_Min_Fields>;
  stddev?: Maybe<Parts_Catalog_Noderelation_Stddev_Fields>;
  stddev_pop?: Maybe<Parts_Catalog_Noderelation_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Parts_Catalog_Noderelation_Stddev_Samp_Fields>;
  sum?: Maybe<Parts_Catalog_Noderelation_Sum_Fields>;
  var_pop?: Maybe<Parts_Catalog_Noderelation_Var_Pop_Fields>;
  var_samp?: Maybe<Parts_Catalog_Noderelation_Var_Samp_Fields>;
  variance?: Maybe<Parts_Catalog_Noderelation_Variance_Fields>;
};

/** aggregate fields of "parts_catalog_noderelation" */
export type Parts_Catalog_Noderelation_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Parts_Catalog_Noderelation_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "parts_catalog_noderelation" */
export type Parts_Catalog_Noderelation_Aggregate_Order_By = {
  avg?: Maybe<Parts_Catalog_Noderelation_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Parts_Catalog_Noderelation_Max_Order_By>;
  min?: Maybe<Parts_Catalog_Noderelation_Min_Order_By>;
  stddev?: Maybe<Parts_Catalog_Noderelation_Stddev_Order_By>;
  stddev_pop?: Maybe<Parts_Catalog_Noderelation_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Parts_Catalog_Noderelation_Stddev_Samp_Order_By>;
  sum?: Maybe<Parts_Catalog_Noderelation_Sum_Order_By>;
  var_pop?: Maybe<Parts_Catalog_Noderelation_Var_Pop_Order_By>;
  var_samp?: Maybe<Parts_Catalog_Noderelation_Var_Samp_Order_By>;
  variance?: Maybe<Parts_Catalog_Noderelation_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "parts_catalog_noderelation" */
export type Parts_Catalog_Noderelation_Arr_Rel_Insert_Input = {
  data: Array<Parts_Catalog_Noderelation_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Parts_Catalog_Noderelation_On_Conflict>;
};

/** aggregate avg on columns */
export type Parts_Catalog_Noderelation_Avg_Fields = {
  __typename?: 'parts_catalog_noderelation_avg_fields';
  created_by_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  parent_node_seq_end_position?: Maybe<Scalars['Float']>;
  parent_node_seq_start_position?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "parts_catalog_noderelation" */
export type Parts_Catalog_Noderelation_Avg_Order_By = {
  created_by_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  parent_node_seq_end_position?: Maybe<Order_By>;
  parent_node_seq_start_position?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "parts_catalog_noderelation". All fields are combined with a logical 'AND'. */
export type Parts_Catalog_Noderelation_Bool_Exp = {
  _and?: Maybe<Array<Parts_Catalog_Noderelation_Bool_Exp>>;
  _not?: Maybe<Parts_Catalog_Noderelation_Bool_Exp>;
  _or?: Maybe<Array<Parts_Catalog_Noderelation_Bool_Exp>>;
  child_node_id?: Maybe<Uuid_Comparison_Exp>;
  created_by_id?: Maybe<Int_Comparison_Exp>;
  date_created?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  order?: Maybe<Int_Comparison_Exp>;
  parent_node_id?: Maybe<Uuid_Comparison_Exp>;
  parent_node_seq_end_position?: Maybe<Int_Comparison_Exp>;
  parent_node_seq_start_position?: Maybe<Int_Comparison_Exp>;
  partsCatalogNodeByParentNodeId?: Maybe<Parts_Catalog_Node_Bool_Exp>;
  parts_catalog_node?: Maybe<Parts_Catalog_Node_Bool_Exp>;
  users_customuser?: Maybe<Users_Customuser_Bool_Exp>;
};

/** unique or primary key constraints on table "parts_catalog_noderelation" */
export enum Parts_Catalog_Noderelation_Constraint {
  /** unique or primary key constraint */
  PartsCatalogNoderelationPkey = 'parts_catalog_noderelation_pkey',
}

/** input type for incrementing numeric columns in table "parts_catalog_noderelation" */
export type Parts_Catalog_Noderelation_Inc_Input = {
  created_by_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  parent_node_seq_end_position?: Maybe<Scalars['Int']>;
  parent_node_seq_start_position?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "parts_catalog_noderelation" */
export type Parts_Catalog_Noderelation_Insert_Input = {
  child_node_id?: Maybe<Scalars['uuid']>;
  created_by_id?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  parent_node_id?: Maybe<Scalars['uuid']>;
  parent_node_seq_end_position?: Maybe<Scalars['Int']>;
  parent_node_seq_start_position?: Maybe<Scalars['Int']>;
  partsCatalogNodeByParentNodeId?: Maybe<Parts_Catalog_Node_Obj_Rel_Insert_Input>;
  parts_catalog_node?: Maybe<Parts_Catalog_Node_Obj_Rel_Insert_Input>;
  users_customuser?: Maybe<Users_Customuser_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Parts_Catalog_Noderelation_Max_Fields = {
  __typename?: 'parts_catalog_noderelation_max_fields';
  child_node_id?: Maybe<Scalars['uuid']>;
  created_by_id?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  parent_node_id?: Maybe<Scalars['uuid']>;
  parent_node_seq_end_position?: Maybe<Scalars['Int']>;
  parent_node_seq_start_position?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "parts_catalog_noderelation" */
export type Parts_Catalog_Noderelation_Max_Order_By = {
  child_node_id?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  date_created?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  parent_node_id?: Maybe<Order_By>;
  parent_node_seq_end_position?: Maybe<Order_By>;
  parent_node_seq_start_position?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Parts_Catalog_Noderelation_Min_Fields = {
  __typename?: 'parts_catalog_noderelation_min_fields';
  child_node_id?: Maybe<Scalars['uuid']>;
  created_by_id?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  parent_node_id?: Maybe<Scalars['uuid']>;
  parent_node_seq_end_position?: Maybe<Scalars['Int']>;
  parent_node_seq_start_position?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "parts_catalog_noderelation" */
export type Parts_Catalog_Noderelation_Min_Order_By = {
  child_node_id?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  date_created?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  parent_node_id?: Maybe<Order_By>;
  parent_node_seq_end_position?: Maybe<Order_By>;
  parent_node_seq_start_position?: Maybe<Order_By>;
};

/** response of any mutation on the table "parts_catalog_noderelation" */
export type Parts_Catalog_Noderelation_Mutation_Response = {
  __typename?: 'parts_catalog_noderelation_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Parts_Catalog_Noderelation>;
};

/** on conflict condition type for table "parts_catalog_noderelation" */
export type Parts_Catalog_Noderelation_On_Conflict = {
  constraint: Parts_Catalog_Noderelation_Constraint;
  update_columns?: Array<Parts_Catalog_Noderelation_Update_Column>;
  where?: Maybe<Parts_Catalog_Noderelation_Bool_Exp>;
};

/** Ordering options when selecting data from "parts_catalog_noderelation". */
export type Parts_Catalog_Noderelation_Order_By = {
  child_node_id?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  date_created?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  parent_node_id?: Maybe<Order_By>;
  parent_node_seq_end_position?: Maybe<Order_By>;
  parent_node_seq_start_position?: Maybe<Order_By>;
  partsCatalogNodeByParentNodeId?: Maybe<Parts_Catalog_Node_Order_By>;
  parts_catalog_node?: Maybe<Parts_Catalog_Node_Order_By>;
  users_customuser?: Maybe<Users_Customuser_Order_By>;
};

/** primary key columns input for table: parts_catalog_noderelation */
export type Parts_Catalog_Noderelation_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "parts_catalog_noderelation" */
export enum Parts_Catalog_Noderelation_Select_Column {
  /** column name */
  ChildNodeId = 'child_node_id',
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  DateCreated = 'date_created',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  ParentNodeId = 'parent_node_id',
  /** column name */
  ParentNodeSeqEndPosition = 'parent_node_seq_end_position',
  /** column name */
  ParentNodeSeqStartPosition = 'parent_node_seq_start_position',
}

/** input type for updating data in table "parts_catalog_noderelation" */
export type Parts_Catalog_Noderelation_Set_Input = {
  child_node_id?: Maybe<Scalars['uuid']>;
  created_by_id?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  parent_node_id?: Maybe<Scalars['uuid']>;
  parent_node_seq_end_position?: Maybe<Scalars['Int']>;
  parent_node_seq_start_position?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Parts_Catalog_Noderelation_Stddev_Fields = {
  __typename?: 'parts_catalog_noderelation_stddev_fields';
  created_by_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  parent_node_seq_end_position?: Maybe<Scalars['Float']>;
  parent_node_seq_start_position?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "parts_catalog_noderelation" */
export type Parts_Catalog_Noderelation_Stddev_Order_By = {
  created_by_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  parent_node_seq_end_position?: Maybe<Order_By>;
  parent_node_seq_start_position?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Parts_Catalog_Noderelation_Stddev_Pop_Fields = {
  __typename?: 'parts_catalog_noderelation_stddev_pop_fields';
  created_by_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  parent_node_seq_end_position?: Maybe<Scalars['Float']>;
  parent_node_seq_start_position?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "parts_catalog_noderelation" */
export type Parts_Catalog_Noderelation_Stddev_Pop_Order_By = {
  created_by_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  parent_node_seq_end_position?: Maybe<Order_By>;
  parent_node_seq_start_position?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Parts_Catalog_Noderelation_Stddev_Samp_Fields = {
  __typename?: 'parts_catalog_noderelation_stddev_samp_fields';
  created_by_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  parent_node_seq_end_position?: Maybe<Scalars['Float']>;
  parent_node_seq_start_position?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "parts_catalog_noderelation" */
export type Parts_Catalog_Noderelation_Stddev_Samp_Order_By = {
  created_by_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  parent_node_seq_end_position?: Maybe<Order_By>;
  parent_node_seq_start_position?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Parts_Catalog_Noderelation_Sum_Fields = {
  __typename?: 'parts_catalog_noderelation_sum_fields';
  created_by_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  parent_node_seq_end_position?: Maybe<Scalars['Int']>;
  parent_node_seq_start_position?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "parts_catalog_noderelation" */
export type Parts_Catalog_Noderelation_Sum_Order_By = {
  created_by_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  parent_node_seq_end_position?: Maybe<Order_By>;
  parent_node_seq_start_position?: Maybe<Order_By>;
};

/** update columns of table "parts_catalog_noderelation" */
export enum Parts_Catalog_Noderelation_Update_Column {
  /** column name */
  ChildNodeId = 'child_node_id',
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  DateCreated = 'date_created',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  ParentNodeId = 'parent_node_id',
  /** column name */
  ParentNodeSeqEndPosition = 'parent_node_seq_end_position',
  /** column name */
  ParentNodeSeqStartPosition = 'parent_node_seq_start_position',
}

/** aggregate var_pop on columns */
export type Parts_Catalog_Noderelation_Var_Pop_Fields = {
  __typename?: 'parts_catalog_noderelation_var_pop_fields';
  created_by_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  parent_node_seq_end_position?: Maybe<Scalars['Float']>;
  parent_node_seq_start_position?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "parts_catalog_noderelation" */
export type Parts_Catalog_Noderelation_Var_Pop_Order_By = {
  created_by_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  parent_node_seq_end_position?: Maybe<Order_By>;
  parent_node_seq_start_position?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Parts_Catalog_Noderelation_Var_Samp_Fields = {
  __typename?: 'parts_catalog_noderelation_var_samp_fields';
  created_by_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  parent_node_seq_end_position?: Maybe<Scalars['Float']>;
  parent_node_seq_start_position?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "parts_catalog_noderelation" */
export type Parts_Catalog_Noderelation_Var_Samp_Order_By = {
  created_by_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  parent_node_seq_end_position?: Maybe<Order_By>;
  parent_node_seq_start_position?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Parts_Catalog_Noderelation_Variance_Fields = {
  __typename?: 'parts_catalog_noderelation_variance_fields';
  created_by_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  parent_node_seq_end_position?: Maybe<Scalars['Float']>;
  parent_node_seq_start_position?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "parts_catalog_noderelation" */
export type Parts_Catalog_Noderelation_Variance_Order_By = {
  created_by_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  parent_node_seq_end_position?: Maybe<Order_By>;
  parent_node_seq_start_position?: Maybe<Order_By>;
};

/** columns and relationships of "parts_catalog_simulationnode" */
export type Parts_Catalog_Simulationnode = {
  __typename?: 'parts_catalog_simulationnode';
  created_by_id?: Maybe<Scalars['Int']>;
  date_created: Scalars['timestamptz'];
  id: Scalars['uuid'];
  node_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  parts_catalog_node?: Maybe<Parts_Catalog_Node>;
  simulation_result_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  simulation_simulationresult?: Maybe<Simulation_Simulationresult>;
  /** An object relationship */
  users_customuser?: Maybe<Users_Customuser>;
};

/** aggregated selection of "parts_catalog_simulationnode" */
export type Parts_Catalog_Simulationnode_Aggregate = {
  __typename?: 'parts_catalog_simulationnode_aggregate';
  aggregate?: Maybe<Parts_Catalog_Simulationnode_Aggregate_Fields>;
  nodes: Array<Parts_Catalog_Simulationnode>;
};

/** aggregate fields of "parts_catalog_simulationnode" */
export type Parts_Catalog_Simulationnode_Aggregate_Fields = {
  __typename?: 'parts_catalog_simulationnode_aggregate_fields';
  avg?: Maybe<Parts_Catalog_Simulationnode_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Parts_Catalog_Simulationnode_Max_Fields>;
  min?: Maybe<Parts_Catalog_Simulationnode_Min_Fields>;
  stddev?: Maybe<Parts_Catalog_Simulationnode_Stddev_Fields>;
  stddev_pop?: Maybe<Parts_Catalog_Simulationnode_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Parts_Catalog_Simulationnode_Stddev_Samp_Fields>;
  sum?: Maybe<Parts_Catalog_Simulationnode_Sum_Fields>;
  var_pop?: Maybe<Parts_Catalog_Simulationnode_Var_Pop_Fields>;
  var_samp?: Maybe<Parts_Catalog_Simulationnode_Var_Samp_Fields>;
  variance?: Maybe<Parts_Catalog_Simulationnode_Variance_Fields>;
};

/** aggregate fields of "parts_catalog_simulationnode" */
export type Parts_Catalog_Simulationnode_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Parts_Catalog_Simulationnode_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "parts_catalog_simulationnode" */
export type Parts_Catalog_Simulationnode_Aggregate_Order_By = {
  avg?: Maybe<Parts_Catalog_Simulationnode_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Parts_Catalog_Simulationnode_Max_Order_By>;
  min?: Maybe<Parts_Catalog_Simulationnode_Min_Order_By>;
  stddev?: Maybe<Parts_Catalog_Simulationnode_Stddev_Order_By>;
  stddev_pop?: Maybe<Parts_Catalog_Simulationnode_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Parts_Catalog_Simulationnode_Stddev_Samp_Order_By>;
  sum?: Maybe<Parts_Catalog_Simulationnode_Sum_Order_By>;
  var_pop?: Maybe<Parts_Catalog_Simulationnode_Var_Pop_Order_By>;
  var_samp?: Maybe<Parts_Catalog_Simulationnode_Var_Samp_Order_By>;
  variance?: Maybe<Parts_Catalog_Simulationnode_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "parts_catalog_simulationnode" */
export type Parts_Catalog_Simulationnode_Arr_Rel_Insert_Input = {
  data: Array<Parts_Catalog_Simulationnode_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Parts_Catalog_Simulationnode_On_Conflict>;
};

/** aggregate avg on columns */
export type Parts_Catalog_Simulationnode_Avg_Fields = {
  __typename?: 'parts_catalog_simulationnode_avg_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "parts_catalog_simulationnode" */
export type Parts_Catalog_Simulationnode_Avg_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "parts_catalog_simulationnode". All fields are combined with a logical 'AND'. */
export type Parts_Catalog_Simulationnode_Bool_Exp = {
  _and?: Maybe<Array<Parts_Catalog_Simulationnode_Bool_Exp>>;
  _not?: Maybe<Parts_Catalog_Simulationnode_Bool_Exp>;
  _or?: Maybe<Array<Parts_Catalog_Simulationnode_Bool_Exp>>;
  created_by_id?: Maybe<Int_Comparison_Exp>;
  date_created?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  node_id?: Maybe<Uuid_Comparison_Exp>;
  parts_catalog_node?: Maybe<Parts_Catalog_Node_Bool_Exp>;
  simulation_result_id?: Maybe<Uuid_Comparison_Exp>;
  simulation_simulationresult?: Maybe<Simulation_Simulationresult_Bool_Exp>;
  users_customuser?: Maybe<Users_Customuser_Bool_Exp>;
};

/** unique or primary key constraints on table "parts_catalog_simulationnode" */
export enum Parts_Catalog_Simulationnode_Constraint {
  /** unique or primary key constraint */
  PartsCatalogSimulationnodePkey = 'parts_catalog_simulationnode_pkey',
}

/** input type for incrementing numeric columns in table "parts_catalog_simulationnode" */
export type Parts_Catalog_Simulationnode_Inc_Input = {
  created_by_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "parts_catalog_simulationnode" */
export type Parts_Catalog_Simulationnode_Insert_Input = {
  created_by_id?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  node_id?: Maybe<Scalars['uuid']>;
  parts_catalog_node?: Maybe<Parts_Catalog_Node_Obj_Rel_Insert_Input>;
  simulation_result_id?: Maybe<Scalars['uuid']>;
  simulation_simulationresult?: Maybe<Simulation_Simulationresult_Obj_Rel_Insert_Input>;
  users_customuser?: Maybe<Users_Customuser_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Parts_Catalog_Simulationnode_Max_Fields = {
  __typename?: 'parts_catalog_simulationnode_max_fields';
  created_by_id?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  node_id?: Maybe<Scalars['uuid']>;
  simulation_result_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "parts_catalog_simulationnode" */
export type Parts_Catalog_Simulationnode_Max_Order_By = {
  created_by_id?: Maybe<Order_By>;
  date_created?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  node_id?: Maybe<Order_By>;
  simulation_result_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Parts_Catalog_Simulationnode_Min_Fields = {
  __typename?: 'parts_catalog_simulationnode_min_fields';
  created_by_id?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  node_id?: Maybe<Scalars['uuid']>;
  simulation_result_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "parts_catalog_simulationnode" */
export type Parts_Catalog_Simulationnode_Min_Order_By = {
  created_by_id?: Maybe<Order_By>;
  date_created?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  node_id?: Maybe<Order_By>;
  simulation_result_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "parts_catalog_simulationnode" */
export type Parts_Catalog_Simulationnode_Mutation_Response = {
  __typename?: 'parts_catalog_simulationnode_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Parts_Catalog_Simulationnode>;
};

/** on conflict condition type for table "parts_catalog_simulationnode" */
export type Parts_Catalog_Simulationnode_On_Conflict = {
  constraint: Parts_Catalog_Simulationnode_Constraint;
  update_columns?: Array<Parts_Catalog_Simulationnode_Update_Column>;
  where?: Maybe<Parts_Catalog_Simulationnode_Bool_Exp>;
};

/** Ordering options when selecting data from "parts_catalog_simulationnode". */
export type Parts_Catalog_Simulationnode_Order_By = {
  created_by_id?: Maybe<Order_By>;
  date_created?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  node_id?: Maybe<Order_By>;
  parts_catalog_node?: Maybe<Parts_Catalog_Node_Order_By>;
  simulation_result_id?: Maybe<Order_By>;
  simulation_simulationresult?: Maybe<Simulation_Simulationresult_Order_By>;
  users_customuser?: Maybe<Users_Customuser_Order_By>;
};

/** primary key columns input for table: parts_catalog_simulationnode */
export type Parts_Catalog_Simulationnode_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "parts_catalog_simulationnode" */
export enum Parts_Catalog_Simulationnode_Select_Column {
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  DateCreated = 'date_created',
  /** column name */
  Id = 'id',
  /** column name */
  NodeId = 'node_id',
  /** column name */
  SimulationResultId = 'simulation_result_id',
}

/** input type for updating data in table "parts_catalog_simulationnode" */
export type Parts_Catalog_Simulationnode_Set_Input = {
  created_by_id?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  node_id?: Maybe<Scalars['uuid']>;
  simulation_result_id?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Parts_Catalog_Simulationnode_Stddev_Fields = {
  __typename?: 'parts_catalog_simulationnode_stddev_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "parts_catalog_simulationnode" */
export type Parts_Catalog_Simulationnode_Stddev_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Parts_Catalog_Simulationnode_Stddev_Pop_Fields = {
  __typename?: 'parts_catalog_simulationnode_stddev_pop_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "parts_catalog_simulationnode" */
export type Parts_Catalog_Simulationnode_Stddev_Pop_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Parts_Catalog_Simulationnode_Stddev_Samp_Fields = {
  __typename?: 'parts_catalog_simulationnode_stddev_samp_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "parts_catalog_simulationnode" */
export type Parts_Catalog_Simulationnode_Stddev_Samp_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Parts_Catalog_Simulationnode_Sum_Fields = {
  __typename?: 'parts_catalog_simulationnode_sum_fields';
  created_by_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "parts_catalog_simulationnode" */
export type Parts_Catalog_Simulationnode_Sum_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** update columns of table "parts_catalog_simulationnode" */
export enum Parts_Catalog_Simulationnode_Update_Column {
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  DateCreated = 'date_created',
  /** column name */
  Id = 'id',
  /** column name */
  NodeId = 'node_id',
  /** column name */
  SimulationResultId = 'simulation_result_id',
}

/** aggregate var_pop on columns */
export type Parts_Catalog_Simulationnode_Var_Pop_Fields = {
  __typename?: 'parts_catalog_simulationnode_var_pop_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "parts_catalog_simulationnode" */
export type Parts_Catalog_Simulationnode_Var_Pop_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Parts_Catalog_Simulationnode_Var_Samp_Fields = {
  __typename?: 'parts_catalog_simulationnode_var_samp_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "parts_catalog_simulationnode" */
export type Parts_Catalog_Simulationnode_Var_Samp_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Parts_Catalog_Simulationnode_Variance_Fields = {
  __typename?: 'parts_catalog_simulationnode_variance_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "parts_catalog_simulationnode" */
export type Parts_Catalog_Simulationnode_Variance_Order_By = {
  created_by_id?: Maybe<Order_By>;
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
  ProjectPkey = 'project_pkey',
}

/** columns and relationships of "project_construct" */
export type Project_Construct = {
  __typename?: 'project_construct';
  /** An object relationship */
  construct: Construct;
  construct_id: Scalars['uuid'];
  id: Scalars['uuid'];
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
  id?: Maybe<Uuid_Comparison_Exp>;
  project?: Maybe<Project_Bool_Exp>;
  project_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "project_construct" */
export enum Project_Construct_Constraint {
  /** unique or primary key constraint */
  ProjectConstructIdKey = 'project_construct_id_key',
  /** unique or primary key constraint */
  ProjectConstructPkey = 'project_construct_pkey',
}

/** input type for inserting data into table "project_construct" */
export type Project_Construct_Insert_Input = {
  construct?: Maybe<Construct_Obj_Rel_Insert_Input>;
  construct_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  project?: Maybe<Project_Obj_Rel_Insert_Input>;
  project_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Project_Construct_Max_Fields = {
  __typename?: 'project_construct_max_fields';
  construct_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  project_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "project_construct" */
export type Project_Construct_Max_Order_By = {
  construct_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Project_Construct_Min_Fields = {
  __typename?: 'project_construct_min_fields';
  construct_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  project_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "project_construct" */
export type Project_Construct_Min_Order_By = {
  construct_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
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
  id?: Maybe<Order_By>;
  project?: Maybe<Project_Order_By>;
  project_id?: Maybe<Order_By>;
};

/** primary key columns input for table: project_construct */
export type Project_Construct_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "project_construct" */
export enum Project_Construct_Select_Column {
  /** column name */
  ConstructId = 'construct_id',
  /** column name */
  Id = 'id',
  /** column name */
  ProjectId = 'project_id',
}

/** input type for updating data in table "project_construct" */
export type Project_Construct_Set_Input = {
  construct_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  project_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "project_construct" */
export enum Project_Construct_Update_Column {
  /** column name */
  ConstructId = 'construct_id',
  /** column name */
  Id = 'id',
  /** column name */
  ProjectId = 'project_id',
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
  UpdatedAt = 'updated_at',
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
  UpdatedAt = 'updated_at',
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
  /** fetch data from the table: "django_celery_results_taskresult" */
  django_celery_results_taskresult: Array<Django_Celery_Results_Taskresult>;
  /** fetch aggregated fields from the table: "django_celery_results_taskresult" */
  django_celery_results_taskresult_aggregate: Django_Celery_Results_Taskresult_Aggregate;
  /** fetch data from the table: "django_celery_results_taskresult" using primary key columns */
  django_celery_results_taskresult_by_pk?: Maybe<Django_Celery_Results_Taskresult>;
  /** fetch data from the table: "experiments_experiment" */
  experiments_experiment: Array<Experiments_Experiment>;
  /** fetch aggregated fields from the table: "experiments_experiment" */
  experiments_experiment_aggregate: Experiments_Experiment_Aggregate;
  /** An array relationship */
  experiments_experiment_analyses: Array<Experiments_Experiment_Analyses>;
  /** An aggregate relationship */
  experiments_experiment_analyses_aggregate: Experiments_Experiment_Analyses_Aggregate;
  /** fetch data from the table: "experiments_experiment_analyses" using primary key columns */
  experiments_experiment_analyses_by_pk?: Maybe<Experiments_Experiment_Analyses>;
  /** fetch data from the table: "experiments_experiment" using primary key columns */
  experiments_experiment_by_pk?: Maybe<Experiments_Experiment>;
  /** An array relationship */
  experiments_experiment_files: Array<Experiments_Experiment_Files>;
  /** An aggregate relationship */
  experiments_experiment_files_aggregate: Experiments_Experiment_Files_Aggregate;
  /** fetch data from the table: "experiments_experiment_files" using primary key columns */
  experiments_experiment_files_by_pk?: Maybe<Experiments_Experiment_Files>;
  /** fetch data from the table: "experiments_figure" */
  experiments_figure: Array<Experiments_Figure>;
  /** fetch aggregated fields from the table: "experiments_figure" */
  experiments_figure_aggregate: Experiments_Figure_Aggregate;
  /** fetch data from the table: "experiments_figure" using primary key columns */
  experiments_figure_by_pk?: Maybe<Experiments_Figure>;
  /** fetch data from the table: "experiments_project" */
  experiments_project: Array<Experiments_Project>;
  /** fetch aggregated fields from the table: "experiments_project" */
  experiments_project_aggregate: Experiments_Project_Aggregate;
  /** fetch data from the table: "experiments_project" using primary key columns */
  experiments_project_by_pk?: Maybe<Experiments_Project>;
  /** fetch data from the table: "experiments_project_experiments" */
  experiments_project_experiments: Array<Experiments_Project_Experiments>;
  /** An aggregate relationship */
  experiments_project_experiments_aggregate: Experiments_Project_Experiments_Aggregate;
  /** fetch data from the table: "experiments_project_experiments" using primary key columns */
  experiments_project_experiments_by_pk?: Maybe<Experiments_Project_Experiments>;
  /** An array relationship */
  experiments_project_nodes: Array<Experiments_Project_Nodes>;
  /** An aggregate relationship */
  experiments_project_nodes_aggregate: Experiments_Project_Nodes_Aggregate;
  /** fetch data from the table: "experiments_project_nodes" using primary key columns */
  experiments_project_nodes_by_pk?: Maybe<Experiments_Project_Nodes>;
  /** fetch data from the table: "measurement_biofile" */
  measurement_biofile: Array<Measurement_Biofile>;
  /** fetch aggregated fields from the table: "measurement_biofile" */
  measurement_biofile_aggregate: Measurement_Biofile_Aggregate;
  /** fetch data from the table: "measurement_biofile" using primary key columns */
  measurement_biofile_by_pk?: Maybe<Measurement_Biofile>;
  /** fetch data from the table: "measurement_taskuser" */
  measurement_taskuser: Array<Measurement_Taskuser>;
  /** fetch aggregated fields from the table: "measurement_taskuser" */
  measurement_taskuser_aggregate: Measurement_Taskuser_Aggregate;
  /** fetch data from the table: "measurement_taskuser" using primary key columns */
  measurement_taskuser_by_pk?: Maybe<Measurement_Taskuser>;
  /** An array relationship */
  measurement_taskuser_task_files: Array<Measurement_Taskuser_Task_Files>;
  /** An aggregate relationship */
  measurement_taskuser_task_files_aggregate: Measurement_Taskuser_Task_Files_Aggregate;
  /** fetch data from the table: "measurement_taskuser_task_files" using primary key columns */
  measurement_taskuser_task_files_by_pk?: Maybe<Measurement_Taskuser_Task_Files>;
  /** fetch data from the table: "part" */
  part: Array<Part>;
  /** fetch aggregated fields from the table: "part" */
  part_aggregate: Part_Aggregate;
  /** fetch data from the table: "part" using primary key columns */
  part_by_pk?: Maybe<Part>;
  /** fetch data from the table: "part_type" */
  part_type: Array<Part_Type>;
  /** fetch aggregated fields from the table: "part_type" */
  part_type_aggregate: Part_Type_Aggregate;
  /** fetch data from the table: "part_type" using primary key columns */
  part_type_by_pk?: Maybe<Part_Type>;
  /** fetch data from the table: "parts_catalog_experimentnode" */
  parts_catalog_experimentnode: Array<Parts_Catalog_Experimentnode>;
  /** fetch aggregated fields from the table: "parts_catalog_experimentnode" */
  parts_catalog_experimentnode_aggregate: Parts_Catalog_Experimentnode_Aggregate;
  /** fetch data from the table: "parts_catalog_experimentnode" using primary key columns */
  parts_catalog_experimentnode_by_pk?: Maybe<Parts_Catalog_Experimentnode>;
  /** fetch data from the table: "parts_catalog_node" */
  parts_catalog_node: Array<Parts_Catalog_Node>;
  /** fetch aggregated fields from the table: "parts_catalog_node" */
  parts_catalog_node_aggregate: Parts_Catalog_Node_Aggregate;
  /** fetch data from the table: "parts_catalog_node" using primary key columns */
  parts_catalog_node_by_pk?: Maybe<Parts_Catalog_Node>;
  /** fetch data from the table: "parts_catalog_noderelation" */
  parts_catalog_noderelation: Array<Parts_Catalog_Noderelation>;
  /** fetch aggregated fields from the table: "parts_catalog_noderelation" */
  parts_catalog_noderelation_aggregate: Parts_Catalog_Noderelation_Aggregate;
  /** fetch data from the table: "parts_catalog_noderelation" using primary key columns */
  parts_catalog_noderelation_by_pk?: Maybe<Parts_Catalog_Noderelation>;
  /** fetch data from the table: "parts_catalog_simulationnode" */
  parts_catalog_simulationnode: Array<Parts_Catalog_Simulationnode>;
  /** fetch aggregated fields from the table: "parts_catalog_simulationnode" */
  parts_catalog_simulationnode_aggregate: Parts_Catalog_Simulationnode_Aggregate;
  /** fetch data from the table: "parts_catalog_simulationnode" using primary key columns */
  parts_catalog_simulationnode_by_pk?: Maybe<Parts_Catalog_Simulationnode>;
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
  /** fetch data from the table: "simulation_simulationresult" */
  simulation_simulationresult: Array<Simulation_Simulationresult>;
  /** fetch aggregated fields from the table: "simulation_simulationresult" */
  simulation_simulationresult_aggregate: Simulation_Simulationresult_Aggregate;
  /** fetch data from the table: "simulation_simulationresult" using primary key columns */
  simulation_simulationresult_by_pk?: Maybe<Simulation_Simulationresult>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "users_customuser" */
  users_customuser: Array<Users_Customuser>;
  /** fetch aggregated fields from the table: "users_customuser" */
  users_customuser_aggregate: Users_Customuser_Aggregate;
  /** fetch data from the table: "users_customuser" using primary key columns */
  users_customuser_by_pk?: Maybe<Users_Customuser>;
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
  id: Scalars['uuid'];
};

export type Query_RootDjango_Celery_Results_TaskresultArgs = {
  distinct_on?: Maybe<Array<Django_Celery_Results_Taskresult_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Django_Celery_Results_Taskresult_Order_By>>;
  where?: Maybe<Django_Celery_Results_Taskresult_Bool_Exp>;
};

export type Query_RootDjango_Celery_Results_Taskresult_AggregateArgs = {
  distinct_on?: Maybe<Array<Django_Celery_Results_Taskresult_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Django_Celery_Results_Taskresult_Order_By>>;
  where?: Maybe<Django_Celery_Results_Taskresult_Bool_Exp>;
};

export type Query_RootDjango_Celery_Results_Taskresult_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootExperiments_ExperimentArgs = {
  distinct_on?: Maybe<Array<Experiments_Experiment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Experiment_Order_By>>;
  where?: Maybe<Experiments_Experiment_Bool_Exp>;
};

export type Query_RootExperiments_Experiment_AggregateArgs = {
  distinct_on?: Maybe<Array<Experiments_Experiment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Experiment_Order_By>>;
  where?: Maybe<Experiments_Experiment_Bool_Exp>;
};

export type Query_RootExperiments_Experiment_AnalysesArgs = {
  distinct_on?: Maybe<Array<Experiments_Experiment_Analyses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Experiment_Analyses_Order_By>>;
  where?: Maybe<Experiments_Experiment_Analyses_Bool_Exp>;
};

export type Query_RootExperiments_Experiment_Analyses_AggregateArgs = {
  distinct_on?: Maybe<Array<Experiments_Experiment_Analyses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Experiment_Analyses_Order_By>>;
  where?: Maybe<Experiments_Experiment_Analyses_Bool_Exp>;
};

export type Query_RootExperiments_Experiment_Analyses_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootExperiments_Experiment_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Query_RootExperiments_Experiment_FilesArgs = {
  distinct_on?: Maybe<Array<Experiments_Experiment_Files_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Experiment_Files_Order_By>>;
  where?: Maybe<Experiments_Experiment_Files_Bool_Exp>;
};

export type Query_RootExperiments_Experiment_Files_AggregateArgs = {
  distinct_on?: Maybe<Array<Experiments_Experiment_Files_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Experiment_Files_Order_By>>;
  where?: Maybe<Experiments_Experiment_Files_Bool_Exp>;
};

export type Query_RootExperiments_Experiment_Files_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootExperiments_FigureArgs = {
  distinct_on?: Maybe<Array<Experiments_Figure_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Figure_Order_By>>;
  where?: Maybe<Experiments_Figure_Bool_Exp>;
};

export type Query_RootExperiments_Figure_AggregateArgs = {
  distinct_on?: Maybe<Array<Experiments_Figure_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Figure_Order_By>>;
  where?: Maybe<Experiments_Figure_Bool_Exp>;
};

export type Query_RootExperiments_Figure_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Query_RootExperiments_ProjectArgs = {
  distinct_on?: Maybe<Array<Experiments_Project_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Project_Order_By>>;
  where?: Maybe<Experiments_Project_Bool_Exp>;
};

export type Query_RootExperiments_Project_AggregateArgs = {
  distinct_on?: Maybe<Array<Experiments_Project_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Project_Order_By>>;
  where?: Maybe<Experiments_Project_Bool_Exp>;
};

export type Query_RootExperiments_Project_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Query_RootExperiments_Project_ExperimentsArgs = {
  distinct_on?: Maybe<Array<Experiments_Project_Experiments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Project_Experiments_Order_By>>;
  where?: Maybe<Experiments_Project_Experiments_Bool_Exp>;
};

export type Query_RootExperiments_Project_Experiments_AggregateArgs = {
  distinct_on?: Maybe<Array<Experiments_Project_Experiments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Project_Experiments_Order_By>>;
  where?: Maybe<Experiments_Project_Experiments_Bool_Exp>;
};

export type Query_RootExperiments_Project_Experiments_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootExperiments_Project_NodesArgs = {
  distinct_on?: Maybe<Array<Experiments_Project_Nodes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Project_Nodes_Order_By>>;
  where?: Maybe<Experiments_Project_Nodes_Bool_Exp>;
};

export type Query_RootExperiments_Project_Nodes_AggregateArgs = {
  distinct_on?: Maybe<Array<Experiments_Project_Nodes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Project_Nodes_Order_By>>;
  where?: Maybe<Experiments_Project_Nodes_Bool_Exp>;
};

export type Query_RootExperiments_Project_Nodes_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootMeasurement_BiofileArgs = {
  distinct_on?: Maybe<Array<Measurement_Biofile_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Measurement_Biofile_Order_By>>;
  where?: Maybe<Measurement_Biofile_Bool_Exp>;
};

export type Query_RootMeasurement_Biofile_AggregateArgs = {
  distinct_on?: Maybe<Array<Measurement_Biofile_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Measurement_Biofile_Order_By>>;
  where?: Maybe<Measurement_Biofile_Bool_Exp>;
};

export type Query_RootMeasurement_Biofile_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Query_RootMeasurement_TaskuserArgs = {
  distinct_on?: Maybe<Array<Measurement_Taskuser_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Measurement_Taskuser_Order_By>>;
  where?: Maybe<Measurement_Taskuser_Bool_Exp>;
};

export type Query_RootMeasurement_Taskuser_AggregateArgs = {
  distinct_on?: Maybe<Array<Measurement_Taskuser_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Measurement_Taskuser_Order_By>>;
  where?: Maybe<Measurement_Taskuser_Bool_Exp>;
};

export type Query_RootMeasurement_Taskuser_By_PkArgs = {
  task_id: Scalars['uuid'];
};

export type Query_RootMeasurement_Taskuser_Task_FilesArgs = {
  distinct_on?: Maybe<Array<Measurement_Taskuser_Task_Files_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Measurement_Taskuser_Task_Files_Order_By>>;
  where?: Maybe<Measurement_Taskuser_Task_Files_Bool_Exp>;
};

export type Query_RootMeasurement_Taskuser_Task_Files_AggregateArgs = {
  distinct_on?: Maybe<Array<Measurement_Taskuser_Task_Files_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Measurement_Taskuser_Task_Files_Order_By>>;
  where?: Maybe<Measurement_Taskuser_Task_Files_Bool_Exp>;
};

export type Query_RootMeasurement_Taskuser_Task_Files_By_PkArgs = {
  id: Scalars['Int'];
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

export type Query_RootPart_TypeArgs = {
  distinct_on?: Maybe<Array<Part_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Part_Type_Order_By>>;
  where?: Maybe<Part_Type_Bool_Exp>;
};

export type Query_RootPart_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Part_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Part_Type_Order_By>>;
  where?: Maybe<Part_Type_Bool_Exp>;
};

export type Query_RootPart_Type_By_PkArgs = {
  name: Scalars['String'];
};

export type Query_RootParts_Catalog_ExperimentnodeArgs = {
  distinct_on?: Maybe<Array<Parts_Catalog_Experimentnode_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parts_Catalog_Experimentnode_Order_By>>;
  where?: Maybe<Parts_Catalog_Experimentnode_Bool_Exp>;
};

export type Query_RootParts_Catalog_Experimentnode_AggregateArgs = {
  distinct_on?: Maybe<Array<Parts_Catalog_Experimentnode_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parts_Catalog_Experimentnode_Order_By>>;
  where?: Maybe<Parts_Catalog_Experimentnode_Bool_Exp>;
};

export type Query_RootParts_Catalog_Experimentnode_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Query_RootParts_Catalog_NodeArgs = {
  distinct_on?: Maybe<Array<Parts_Catalog_Node_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parts_Catalog_Node_Order_By>>;
  where?: Maybe<Parts_Catalog_Node_Bool_Exp>;
};

export type Query_RootParts_Catalog_Node_AggregateArgs = {
  distinct_on?: Maybe<Array<Parts_Catalog_Node_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parts_Catalog_Node_Order_By>>;
  where?: Maybe<Parts_Catalog_Node_Bool_Exp>;
};

export type Query_RootParts_Catalog_Node_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Query_RootParts_Catalog_NoderelationArgs = {
  distinct_on?: Maybe<Array<Parts_Catalog_Noderelation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parts_Catalog_Noderelation_Order_By>>;
  where?: Maybe<Parts_Catalog_Noderelation_Bool_Exp>;
};

export type Query_RootParts_Catalog_Noderelation_AggregateArgs = {
  distinct_on?: Maybe<Array<Parts_Catalog_Noderelation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parts_Catalog_Noderelation_Order_By>>;
  where?: Maybe<Parts_Catalog_Noderelation_Bool_Exp>;
};

export type Query_RootParts_Catalog_Noderelation_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootParts_Catalog_SimulationnodeArgs = {
  distinct_on?: Maybe<Array<Parts_Catalog_Simulationnode_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parts_Catalog_Simulationnode_Order_By>>;
  where?: Maybe<Parts_Catalog_Simulationnode_Bool_Exp>;
};

export type Query_RootParts_Catalog_Simulationnode_AggregateArgs = {
  distinct_on?: Maybe<Array<Parts_Catalog_Simulationnode_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parts_Catalog_Simulationnode_Order_By>>;
  where?: Maybe<Parts_Catalog_Simulationnode_Bool_Exp>;
};

export type Query_RootParts_Catalog_Simulationnode_By_PkArgs = {
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
  id: Scalars['uuid'];
};

export type Query_RootSimulation_SimulationresultArgs = {
  distinct_on?: Maybe<Array<Simulation_Simulationresult_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Simulation_Simulationresult_Order_By>>;
  where?: Maybe<Simulation_Simulationresult_Bool_Exp>;
};

export type Query_RootSimulation_Simulationresult_AggregateArgs = {
  distinct_on?: Maybe<Array<Simulation_Simulationresult_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Simulation_Simulationresult_Order_By>>;
  where?: Maybe<Simulation_Simulationresult_Bool_Exp>;
};

export type Query_RootSimulation_Simulationresult_By_PkArgs = {
  id: Scalars['uuid'];
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

export type Query_RootUsers_CustomuserArgs = {
  distinct_on?: Maybe<Array<Users_Customuser_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Customuser_Order_By>>;
  where?: Maybe<Users_Customuser_Bool_Exp>;
};

export type Query_RootUsers_Customuser_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Customuser_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Customuser_Order_By>>;
  where?: Maybe<Users_Customuser_Bool_Exp>;
};

export type Query_RootUsers_Customuser_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "simulation_simulationresult" */
export type Simulation_Simulationresult = {
  __typename?: 'simulation_simulationresult';
  chart: Scalars['String'];
  created_by_id?: Maybe<Scalars['Int']>;
  date_created: Scalars['timestamptz'];
  display_name: Scalars['String'];
  id: Scalars['uuid'];
  mrna: Scalars['String'];
  parts: Scalars['String'];
  /** An array relationship */
  parts_catalog_simulationnodes: Array<Parts_Catalog_Simulationnode>;
  /** An aggregate relationship */
  parts_catalog_simulationnodes_aggregate: Parts_Catalog_Simulationnode_Aggregate;
  protein: Scalars['String'];
  ribo: Scalars['String'];
  rnap: Scalars['String'];
  /** An object relationship */
  users_customuser?: Maybe<Users_Customuser>;
};

/** columns and relationships of "simulation_simulationresult" */
export type Simulation_SimulationresultParts_Catalog_SimulationnodesArgs = {
  distinct_on?: Maybe<Array<Parts_Catalog_Simulationnode_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parts_Catalog_Simulationnode_Order_By>>;
  where?: Maybe<Parts_Catalog_Simulationnode_Bool_Exp>;
};

/** columns and relationships of "simulation_simulationresult" */
export type Simulation_SimulationresultParts_Catalog_Simulationnodes_AggregateArgs =
  {
    distinct_on?: Maybe<Array<Parts_Catalog_Simulationnode_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Parts_Catalog_Simulationnode_Order_By>>;
    where?: Maybe<Parts_Catalog_Simulationnode_Bool_Exp>;
  };

/** aggregated selection of "simulation_simulationresult" */
export type Simulation_Simulationresult_Aggregate = {
  __typename?: 'simulation_simulationresult_aggregate';
  aggregate?: Maybe<Simulation_Simulationresult_Aggregate_Fields>;
  nodes: Array<Simulation_Simulationresult>;
};

/** aggregate fields of "simulation_simulationresult" */
export type Simulation_Simulationresult_Aggregate_Fields = {
  __typename?: 'simulation_simulationresult_aggregate_fields';
  avg?: Maybe<Simulation_Simulationresult_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Simulation_Simulationresult_Max_Fields>;
  min?: Maybe<Simulation_Simulationresult_Min_Fields>;
  stddev?: Maybe<Simulation_Simulationresult_Stddev_Fields>;
  stddev_pop?: Maybe<Simulation_Simulationresult_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Simulation_Simulationresult_Stddev_Samp_Fields>;
  sum?: Maybe<Simulation_Simulationresult_Sum_Fields>;
  var_pop?: Maybe<Simulation_Simulationresult_Var_Pop_Fields>;
  var_samp?: Maybe<Simulation_Simulationresult_Var_Samp_Fields>;
  variance?: Maybe<Simulation_Simulationresult_Variance_Fields>;
};

/** aggregate fields of "simulation_simulationresult" */
export type Simulation_Simulationresult_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Simulation_Simulationresult_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "simulation_simulationresult" */
export type Simulation_Simulationresult_Aggregate_Order_By = {
  avg?: Maybe<Simulation_Simulationresult_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Simulation_Simulationresult_Max_Order_By>;
  min?: Maybe<Simulation_Simulationresult_Min_Order_By>;
  stddev?: Maybe<Simulation_Simulationresult_Stddev_Order_By>;
  stddev_pop?: Maybe<Simulation_Simulationresult_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Simulation_Simulationresult_Stddev_Samp_Order_By>;
  sum?: Maybe<Simulation_Simulationresult_Sum_Order_By>;
  var_pop?: Maybe<Simulation_Simulationresult_Var_Pop_Order_By>;
  var_samp?: Maybe<Simulation_Simulationresult_Var_Samp_Order_By>;
  variance?: Maybe<Simulation_Simulationresult_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "simulation_simulationresult" */
export type Simulation_Simulationresult_Arr_Rel_Insert_Input = {
  data: Array<Simulation_Simulationresult_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Simulation_Simulationresult_On_Conflict>;
};

/** aggregate avg on columns */
export type Simulation_Simulationresult_Avg_Fields = {
  __typename?: 'simulation_simulationresult_avg_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "simulation_simulationresult" */
export type Simulation_Simulationresult_Avg_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "simulation_simulationresult". All fields are combined with a logical 'AND'. */
export type Simulation_Simulationresult_Bool_Exp = {
  _and?: Maybe<Array<Simulation_Simulationresult_Bool_Exp>>;
  _not?: Maybe<Simulation_Simulationresult_Bool_Exp>;
  _or?: Maybe<Array<Simulation_Simulationresult_Bool_Exp>>;
  chart?: Maybe<String_Comparison_Exp>;
  created_by_id?: Maybe<Int_Comparison_Exp>;
  date_created?: Maybe<Timestamptz_Comparison_Exp>;
  display_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  mrna?: Maybe<String_Comparison_Exp>;
  parts?: Maybe<String_Comparison_Exp>;
  parts_catalog_simulationnodes?: Maybe<Parts_Catalog_Simulationnode_Bool_Exp>;
  protein?: Maybe<String_Comparison_Exp>;
  ribo?: Maybe<String_Comparison_Exp>;
  rnap?: Maybe<String_Comparison_Exp>;
  users_customuser?: Maybe<Users_Customuser_Bool_Exp>;
};

/** unique or primary key constraints on table "simulation_simulationresult" */
export enum Simulation_Simulationresult_Constraint {
  /** unique or primary key constraint */
  SimulationSimulationresultPkey = 'simulation_simulationresult_pkey',
}

/** input type for incrementing numeric columns in table "simulation_simulationresult" */
export type Simulation_Simulationresult_Inc_Input = {
  created_by_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "simulation_simulationresult" */
export type Simulation_Simulationresult_Insert_Input = {
  chart?: Maybe<Scalars['String']>;
  created_by_id?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mrna?: Maybe<Scalars['String']>;
  parts?: Maybe<Scalars['String']>;
  parts_catalog_simulationnodes?: Maybe<Parts_Catalog_Simulationnode_Arr_Rel_Insert_Input>;
  protein?: Maybe<Scalars['String']>;
  ribo?: Maybe<Scalars['String']>;
  rnap?: Maybe<Scalars['String']>;
  users_customuser?: Maybe<Users_Customuser_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Simulation_Simulationresult_Max_Fields = {
  __typename?: 'simulation_simulationresult_max_fields';
  chart?: Maybe<Scalars['String']>;
  created_by_id?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mrna?: Maybe<Scalars['String']>;
  parts?: Maybe<Scalars['String']>;
  protein?: Maybe<Scalars['String']>;
  ribo?: Maybe<Scalars['String']>;
  rnap?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "simulation_simulationresult" */
export type Simulation_Simulationresult_Max_Order_By = {
  chart?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  date_created?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mrna?: Maybe<Order_By>;
  parts?: Maybe<Order_By>;
  protein?: Maybe<Order_By>;
  ribo?: Maybe<Order_By>;
  rnap?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Simulation_Simulationresult_Min_Fields = {
  __typename?: 'simulation_simulationresult_min_fields';
  chart?: Maybe<Scalars['String']>;
  created_by_id?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mrna?: Maybe<Scalars['String']>;
  parts?: Maybe<Scalars['String']>;
  protein?: Maybe<Scalars['String']>;
  ribo?: Maybe<Scalars['String']>;
  rnap?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "simulation_simulationresult" */
export type Simulation_Simulationresult_Min_Order_By = {
  chart?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  date_created?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mrna?: Maybe<Order_By>;
  parts?: Maybe<Order_By>;
  protein?: Maybe<Order_By>;
  ribo?: Maybe<Order_By>;
  rnap?: Maybe<Order_By>;
};

/** response of any mutation on the table "simulation_simulationresult" */
export type Simulation_Simulationresult_Mutation_Response = {
  __typename?: 'simulation_simulationresult_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Simulation_Simulationresult>;
};

/** input type for inserting object relation for remote table "simulation_simulationresult" */
export type Simulation_Simulationresult_Obj_Rel_Insert_Input = {
  data: Simulation_Simulationresult_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Simulation_Simulationresult_On_Conflict>;
};

/** on conflict condition type for table "simulation_simulationresult" */
export type Simulation_Simulationresult_On_Conflict = {
  constraint: Simulation_Simulationresult_Constraint;
  update_columns?: Array<Simulation_Simulationresult_Update_Column>;
  where?: Maybe<Simulation_Simulationresult_Bool_Exp>;
};

/** Ordering options when selecting data from "simulation_simulationresult". */
export type Simulation_Simulationresult_Order_By = {
  chart?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  date_created?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mrna?: Maybe<Order_By>;
  parts?: Maybe<Order_By>;
  parts_catalog_simulationnodes_aggregate?: Maybe<Parts_Catalog_Simulationnode_Aggregate_Order_By>;
  protein?: Maybe<Order_By>;
  ribo?: Maybe<Order_By>;
  rnap?: Maybe<Order_By>;
  users_customuser?: Maybe<Users_Customuser_Order_By>;
};

/** primary key columns input for table: simulation_simulationresult */
export type Simulation_Simulationresult_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "simulation_simulationresult" */
export enum Simulation_Simulationresult_Select_Column {
  /** column name */
  Chart = 'chart',
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  DateCreated = 'date_created',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Id = 'id',
  /** column name */
  Mrna = 'mrna',
  /** column name */
  Parts = 'parts',
  /** column name */
  Protein = 'protein',
  /** column name */
  Ribo = 'ribo',
  /** column name */
  Rnap = 'rnap',
}

/** input type for updating data in table "simulation_simulationresult" */
export type Simulation_Simulationresult_Set_Input = {
  chart?: Maybe<Scalars['String']>;
  created_by_id?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mrna?: Maybe<Scalars['String']>;
  parts?: Maybe<Scalars['String']>;
  protein?: Maybe<Scalars['String']>;
  ribo?: Maybe<Scalars['String']>;
  rnap?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Simulation_Simulationresult_Stddev_Fields = {
  __typename?: 'simulation_simulationresult_stddev_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "simulation_simulationresult" */
export type Simulation_Simulationresult_Stddev_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Simulation_Simulationresult_Stddev_Pop_Fields = {
  __typename?: 'simulation_simulationresult_stddev_pop_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "simulation_simulationresult" */
export type Simulation_Simulationresult_Stddev_Pop_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Simulation_Simulationresult_Stddev_Samp_Fields = {
  __typename?: 'simulation_simulationresult_stddev_samp_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "simulation_simulationresult" */
export type Simulation_Simulationresult_Stddev_Samp_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Simulation_Simulationresult_Sum_Fields = {
  __typename?: 'simulation_simulationresult_sum_fields';
  created_by_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "simulation_simulationresult" */
export type Simulation_Simulationresult_Sum_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** update columns of table "simulation_simulationresult" */
export enum Simulation_Simulationresult_Update_Column {
  /** column name */
  Chart = 'chart',
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  DateCreated = 'date_created',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Id = 'id',
  /** column name */
  Mrna = 'mrna',
  /** column name */
  Parts = 'parts',
  /** column name */
  Protein = 'protein',
  /** column name */
  Ribo = 'ribo',
  /** column name */
  Rnap = 'rnap',
}

/** aggregate var_pop on columns */
export type Simulation_Simulationresult_Var_Pop_Fields = {
  __typename?: 'simulation_simulationresult_var_pop_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "simulation_simulationresult" */
export type Simulation_Simulationresult_Var_Pop_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Simulation_Simulationresult_Var_Samp_Fields = {
  __typename?: 'simulation_simulationresult_var_samp_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "simulation_simulationresult" */
export type Simulation_Simulationresult_Var_Samp_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Simulation_Simulationresult_Variance_Fields = {
  __typename?: 'simulation_simulationresult_variance_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "simulation_simulationresult" */
export type Simulation_Simulationresult_Variance_Order_By = {
  created_by_id?: Maybe<Order_By>;
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
  /** fetch data from the table: "django_celery_results_taskresult" */
  django_celery_results_taskresult: Array<Django_Celery_Results_Taskresult>;
  /** fetch aggregated fields from the table: "django_celery_results_taskresult" */
  django_celery_results_taskresult_aggregate: Django_Celery_Results_Taskresult_Aggregate;
  /** fetch data from the table: "django_celery_results_taskresult" using primary key columns */
  django_celery_results_taskresult_by_pk?: Maybe<Django_Celery_Results_Taskresult>;
  /** fetch data from the table: "experiments_experiment" */
  experiments_experiment: Array<Experiments_Experiment>;
  /** fetch aggregated fields from the table: "experiments_experiment" */
  experiments_experiment_aggregate: Experiments_Experiment_Aggregate;
  /** An array relationship */
  experiments_experiment_analyses: Array<Experiments_Experiment_Analyses>;
  /** An aggregate relationship */
  experiments_experiment_analyses_aggregate: Experiments_Experiment_Analyses_Aggregate;
  /** fetch data from the table: "experiments_experiment_analyses" using primary key columns */
  experiments_experiment_analyses_by_pk?: Maybe<Experiments_Experiment_Analyses>;
  /** fetch data from the table: "experiments_experiment" using primary key columns */
  experiments_experiment_by_pk?: Maybe<Experiments_Experiment>;
  /** An array relationship */
  experiments_experiment_files: Array<Experiments_Experiment_Files>;
  /** An aggregate relationship */
  experiments_experiment_files_aggregate: Experiments_Experiment_Files_Aggregate;
  /** fetch data from the table: "experiments_experiment_files" using primary key columns */
  experiments_experiment_files_by_pk?: Maybe<Experiments_Experiment_Files>;
  /** fetch data from the table: "experiments_figure" */
  experiments_figure: Array<Experiments_Figure>;
  /** fetch aggregated fields from the table: "experiments_figure" */
  experiments_figure_aggregate: Experiments_Figure_Aggregate;
  /** fetch data from the table: "experiments_figure" using primary key columns */
  experiments_figure_by_pk?: Maybe<Experiments_Figure>;
  /** fetch data from the table: "experiments_project" */
  experiments_project: Array<Experiments_Project>;
  /** fetch aggregated fields from the table: "experiments_project" */
  experiments_project_aggregate: Experiments_Project_Aggregate;
  /** fetch data from the table: "experiments_project" using primary key columns */
  experiments_project_by_pk?: Maybe<Experiments_Project>;
  /** fetch data from the table: "experiments_project_experiments" */
  experiments_project_experiments: Array<Experiments_Project_Experiments>;
  /** An aggregate relationship */
  experiments_project_experiments_aggregate: Experiments_Project_Experiments_Aggregate;
  /** fetch data from the table: "experiments_project_experiments" using primary key columns */
  experiments_project_experiments_by_pk?: Maybe<Experiments_Project_Experiments>;
  /** An array relationship */
  experiments_project_nodes: Array<Experiments_Project_Nodes>;
  /** An aggregate relationship */
  experiments_project_nodes_aggregate: Experiments_Project_Nodes_Aggregate;
  /** fetch data from the table: "experiments_project_nodes" using primary key columns */
  experiments_project_nodes_by_pk?: Maybe<Experiments_Project_Nodes>;
  /** fetch data from the table: "measurement_biofile" */
  measurement_biofile: Array<Measurement_Biofile>;
  /** fetch aggregated fields from the table: "measurement_biofile" */
  measurement_biofile_aggregate: Measurement_Biofile_Aggregate;
  /** fetch data from the table: "measurement_biofile" using primary key columns */
  measurement_biofile_by_pk?: Maybe<Measurement_Biofile>;
  /** fetch data from the table: "measurement_taskuser" */
  measurement_taskuser: Array<Measurement_Taskuser>;
  /** fetch aggregated fields from the table: "measurement_taskuser" */
  measurement_taskuser_aggregate: Measurement_Taskuser_Aggregate;
  /** fetch data from the table: "measurement_taskuser" using primary key columns */
  measurement_taskuser_by_pk?: Maybe<Measurement_Taskuser>;
  /** An array relationship */
  measurement_taskuser_task_files: Array<Measurement_Taskuser_Task_Files>;
  /** An aggregate relationship */
  measurement_taskuser_task_files_aggregate: Measurement_Taskuser_Task_Files_Aggregate;
  /** fetch data from the table: "measurement_taskuser_task_files" using primary key columns */
  measurement_taskuser_task_files_by_pk?: Maybe<Measurement_Taskuser_Task_Files>;
  /** fetch data from the table: "part" */
  part: Array<Part>;
  /** fetch aggregated fields from the table: "part" */
  part_aggregate: Part_Aggregate;
  /** fetch data from the table: "part" using primary key columns */
  part_by_pk?: Maybe<Part>;
  /** fetch data from the table: "part_type" */
  part_type: Array<Part_Type>;
  /** fetch aggregated fields from the table: "part_type" */
  part_type_aggregate: Part_Type_Aggregate;
  /** fetch data from the table: "part_type" using primary key columns */
  part_type_by_pk?: Maybe<Part_Type>;
  /** fetch data from the table: "parts_catalog_experimentnode" */
  parts_catalog_experimentnode: Array<Parts_Catalog_Experimentnode>;
  /** fetch aggregated fields from the table: "parts_catalog_experimentnode" */
  parts_catalog_experimentnode_aggregate: Parts_Catalog_Experimentnode_Aggregate;
  /** fetch data from the table: "parts_catalog_experimentnode" using primary key columns */
  parts_catalog_experimentnode_by_pk?: Maybe<Parts_Catalog_Experimentnode>;
  /** fetch data from the table: "parts_catalog_node" */
  parts_catalog_node: Array<Parts_Catalog_Node>;
  /** fetch aggregated fields from the table: "parts_catalog_node" */
  parts_catalog_node_aggregate: Parts_Catalog_Node_Aggregate;
  /** fetch data from the table: "parts_catalog_node" using primary key columns */
  parts_catalog_node_by_pk?: Maybe<Parts_Catalog_Node>;
  /** fetch data from the table: "parts_catalog_noderelation" */
  parts_catalog_noderelation: Array<Parts_Catalog_Noderelation>;
  /** fetch aggregated fields from the table: "parts_catalog_noderelation" */
  parts_catalog_noderelation_aggregate: Parts_Catalog_Noderelation_Aggregate;
  /** fetch data from the table: "parts_catalog_noderelation" using primary key columns */
  parts_catalog_noderelation_by_pk?: Maybe<Parts_Catalog_Noderelation>;
  /** fetch data from the table: "parts_catalog_simulationnode" */
  parts_catalog_simulationnode: Array<Parts_Catalog_Simulationnode>;
  /** fetch aggregated fields from the table: "parts_catalog_simulationnode" */
  parts_catalog_simulationnode_aggregate: Parts_Catalog_Simulationnode_Aggregate;
  /** fetch data from the table: "parts_catalog_simulationnode" using primary key columns */
  parts_catalog_simulationnode_by_pk?: Maybe<Parts_Catalog_Simulationnode>;
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
  /** fetch data from the table: "simulation_simulationresult" */
  simulation_simulationresult: Array<Simulation_Simulationresult>;
  /** fetch aggregated fields from the table: "simulation_simulationresult" */
  simulation_simulationresult_aggregate: Simulation_Simulationresult_Aggregate;
  /** fetch data from the table: "simulation_simulationresult" using primary key columns */
  simulation_simulationresult_by_pk?: Maybe<Simulation_Simulationresult>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "users_customuser" */
  users_customuser: Array<Users_Customuser>;
  /** fetch aggregated fields from the table: "users_customuser" */
  users_customuser_aggregate: Users_Customuser_Aggregate;
  /** fetch data from the table: "users_customuser" using primary key columns */
  users_customuser_by_pk?: Maybe<Users_Customuser>;
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
  id: Scalars['uuid'];
};

export type Subscription_RootDjango_Celery_Results_TaskresultArgs = {
  distinct_on?: Maybe<Array<Django_Celery_Results_Taskresult_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Django_Celery_Results_Taskresult_Order_By>>;
  where?: Maybe<Django_Celery_Results_Taskresult_Bool_Exp>;
};

export type Subscription_RootDjango_Celery_Results_Taskresult_AggregateArgs = {
  distinct_on?: Maybe<Array<Django_Celery_Results_Taskresult_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Django_Celery_Results_Taskresult_Order_By>>;
  where?: Maybe<Django_Celery_Results_Taskresult_Bool_Exp>;
};

export type Subscription_RootDjango_Celery_Results_Taskresult_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootExperiments_ExperimentArgs = {
  distinct_on?: Maybe<Array<Experiments_Experiment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Experiment_Order_By>>;
  where?: Maybe<Experiments_Experiment_Bool_Exp>;
};

export type Subscription_RootExperiments_Experiment_AggregateArgs = {
  distinct_on?: Maybe<Array<Experiments_Experiment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Experiment_Order_By>>;
  where?: Maybe<Experiments_Experiment_Bool_Exp>;
};

export type Subscription_RootExperiments_Experiment_AnalysesArgs = {
  distinct_on?: Maybe<Array<Experiments_Experiment_Analyses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Experiment_Analyses_Order_By>>;
  where?: Maybe<Experiments_Experiment_Analyses_Bool_Exp>;
};

export type Subscription_RootExperiments_Experiment_Analyses_AggregateArgs = {
  distinct_on?: Maybe<Array<Experiments_Experiment_Analyses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Experiment_Analyses_Order_By>>;
  where?: Maybe<Experiments_Experiment_Analyses_Bool_Exp>;
};

export type Subscription_RootExperiments_Experiment_Analyses_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootExperiments_Experiment_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_RootExperiments_Experiment_FilesArgs = {
  distinct_on?: Maybe<Array<Experiments_Experiment_Files_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Experiment_Files_Order_By>>;
  where?: Maybe<Experiments_Experiment_Files_Bool_Exp>;
};

export type Subscription_RootExperiments_Experiment_Files_AggregateArgs = {
  distinct_on?: Maybe<Array<Experiments_Experiment_Files_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Experiment_Files_Order_By>>;
  where?: Maybe<Experiments_Experiment_Files_Bool_Exp>;
};

export type Subscription_RootExperiments_Experiment_Files_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootExperiments_FigureArgs = {
  distinct_on?: Maybe<Array<Experiments_Figure_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Figure_Order_By>>;
  where?: Maybe<Experiments_Figure_Bool_Exp>;
};

export type Subscription_RootExperiments_Figure_AggregateArgs = {
  distinct_on?: Maybe<Array<Experiments_Figure_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Figure_Order_By>>;
  where?: Maybe<Experiments_Figure_Bool_Exp>;
};

export type Subscription_RootExperiments_Figure_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_RootExperiments_ProjectArgs = {
  distinct_on?: Maybe<Array<Experiments_Project_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Project_Order_By>>;
  where?: Maybe<Experiments_Project_Bool_Exp>;
};

export type Subscription_RootExperiments_Project_AggregateArgs = {
  distinct_on?: Maybe<Array<Experiments_Project_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Project_Order_By>>;
  where?: Maybe<Experiments_Project_Bool_Exp>;
};

export type Subscription_RootExperiments_Project_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_RootExperiments_Project_ExperimentsArgs = {
  distinct_on?: Maybe<Array<Experiments_Project_Experiments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Project_Experiments_Order_By>>;
  where?: Maybe<Experiments_Project_Experiments_Bool_Exp>;
};

export type Subscription_RootExperiments_Project_Experiments_AggregateArgs = {
  distinct_on?: Maybe<Array<Experiments_Project_Experiments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Project_Experiments_Order_By>>;
  where?: Maybe<Experiments_Project_Experiments_Bool_Exp>;
};

export type Subscription_RootExperiments_Project_Experiments_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootExperiments_Project_NodesArgs = {
  distinct_on?: Maybe<Array<Experiments_Project_Nodes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Project_Nodes_Order_By>>;
  where?: Maybe<Experiments_Project_Nodes_Bool_Exp>;
};

export type Subscription_RootExperiments_Project_Nodes_AggregateArgs = {
  distinct_on?: Maybe<Array<Experiments_Project_Nodes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Project_Nodes_Order_By>>;
  where?: Maybe<Experiments_Project_Nodes_Bool_Exp>;
};

export type Subscription_RootExperiments_Project_Nodes_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootMeasurement_BiofileArgs = {
  distinct_on?: Maybe<Array<Measurement_Biofile_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Measurement_Biofile_Order_By>>;
  where?: Maybe<Measurement_Biofile_Bool_Exp>;
};

export type Subscription_RootMeasurement_Biofile_AggregateArgs = {
  distinct_on?: Maybe<Array<Measurement_Biofile_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Measurement_Biofile_Order_By>>;
  where?: Maybe<Measurement_Biofile_Bool_Exp>;
};

export type Subscription_RootMeasurement_Biofile_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_RootMeasurement_TaskuserArgs = {
  distinct_on?: Maybe<Array<Measurement_Taskuser_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Measurement_Taskuser_Order_By>>;
  where?: Maybe<Measurement_Taskuser_Bool_Exp>;
};

export type Subscription_RootMeasurement_Taskuser_AggregateArgs = {
  distinct_on?: Maybe<Array<Measurement_Taskuser_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Measurement_Taskuser_Order_By>>;
  where?: Maybe<Measurement_Taskuser_Bool_Exp>;
};

export type Subscription_RootMeasurement_Taskuser_By_PkArgs = {
  task_id: Scalars['uuid'];
};

export type Subscription_RootMeasurement_Taskuser_Task_FilesArgs = {
  distinct_on?: Maybe<Array<Measurement_Taskuser_Task_Files_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Measurement_Taskuser_Task_Files_Order_By>>;
  where?: Maybe<Measurement_Taskuser_Task_Files_Bool_Exp>;
};

export type Subscription_RootMeasurement_Taskuser_Task_Files_AggregateArgs = {
  distinct_on?: Maybe<Array<Measurement_Taskuser_Task_Files_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Measurement_Taskuser_Task_Files_Order_By>>;
  where?: Maybe<Measurement_Taskuser_Task_Files_Bool_Exp>;
};

export type Subscription_RootMeasurement_Taskuser_Task_Files_By_PkArgs = {
  id: Scalars['Int'];
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

export type Subscription_RootPart_TypeArgs = {
  distinct_on?: Maybe<Array<Part_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Part_Type_Order_By>>;
  where?: Maybe<Part_Type_Bool_Exp>;
};

export type Subscription_RootPart_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Part_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Part_Type_Order_By>>;
  where?: Maybe<Part_Type_Bool_Exp>;
};

export type Subscription_RootPart_Type_By_PkArgs = {
  name: Scalars['String'];
};

export type Subscription_RootParts_Catalog_ExperimentnodeArgs = {
  distinct_on?: Maybe<Array<Parts_Catalog_Experimentnode_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parts_Catalog_Experimentnode_Order_By>>;
  where?: Maybe<Parts_Catalog_Experimentnode_Bool_Exp>;
};

export type Subscription_RootParts_Catalog_Experimentnode_AggregateArgs = {
  distinct_on?: Maybe<Array<Parts_Catalog_Experimentnode_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parts_Catalog_Experimentnode_Order_By>>;
  where?: Maybe<Parts_Catalog_Experimentnode_Bool_Exp>;
};

export type Subscription_RootParts_Catalog_Experimentnode_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_RootParts_Catalog_NodeArgs = {
  distinct_on?: Maybe<Array<Parts_Catalog_Node_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parts_Catalog_Node_Order_By>>;
  where?: Maybe<Parts_Catalog_Node_Bool_Exp>;
};

export type Subscription_RootParts_Catalog_Node_AggregateArgs = {
  distinct_on?: Maybe<Array<Parts_Catalog_Node_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parts_Catalog_Node_Order_By>>;
  where?: Maybe<Parts_Catalog_Node_Bool_Exp>;
};

export type Subscription_RootParts_Catalog_Node_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_RootParts_Catalog_NoderelationArgs = {
  distinct_on?: Maybe<Array<Parts_Catalog_Noderelation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parts_Catalog_Noderelation_Order_By>>;
  where?: Maybe<Parts_Catalog_Noderelation_Bool_Exp>;
};

export type Subscription_RootParts_Catalog_Noderelation_AggregateArgs = {
  distinct_on?: Maybe<Array<Parts_Catalog_Noderelation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parts_Catalog_Noderelation_Order_By>>;
  where?: Maybe<Parts_Catalog_Noderelation_Bool_Exp>;
};

export type Subscription_RootParts_Catalog_Noderelation_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootParts_Catalog_SimulationnodeArgs = {
  distinct_on?: Maybe<Array<Parts_Catalog_Simulationnode_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parts_Catalog_Simulationnode_Order_By>>;
  where?: Maybe<Parts_Catalog_Simulationnode_Bool_Exp>;
};

export type Subscription_RootParts_Catalog_Simulationnode_AggregateArgs = {
  distinct_on?: Maybe<Array<Parts_Catalog_Simulationnode_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parts_Catalog_Simulationnode_Order_By>>;
  where?: Maybe<Parts_Catalog_Simulationnode_Bool_Exp>;
};

export type Subscription_RootParts_Catalog_Simulationnode_By_PkArgs = {
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
  id: Scalars['uuid'];
};

export type Subscription_RootSimulation_SimulationresultArgs = {
  distinct_on?: Maybe<Array<Simulation_Simulationresult_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Simulation_Simulationresult_Order_By>>;
  where?: Maybe<Simulation_Simulationresult_Bool_Exp>;
};

export type Subscription_RootSimulation_Simulationresult_AggregateArgs = {
  distinct_on?: Maybe<Array<Simulation_Simulationresult_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Simulation_Simulationresult_Order_By>>;
  where?: Maybe<Simulation_Simulationresult_Bool_Exp>;
};

export type Subscription_RootSimulation_Simulationresult_By_PkArgs = {
  id: Scalars['uuid'];
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

export type Subscription_RootUsers_CustomuserArgs = {
  distinct_on?: Maybe<Array<Users_Customuser_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Customuser_Order_By>>;
  where?: Maybe<Users_Customuser_Bool_Exp>;
};

export type Subscription_RootUsers_Customuser_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Customuser_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Customuser_Order_By>>;
  where?: Maybe<Users_Customuser_Bool_Exp>;
};

export type Subscription_RootUsers_Customuser_By_PkArgs = {
  id: Scalars['Int'];
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
  UserUsernameKey = 'user_username_key',
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
  Username = 'username',
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
  Username = 'username',
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

/** columns and relationships of "users_customuser" */
export type Users_Customuser = {
  __typename?: 'users_customuser';
  date_joined: Scalars['timestamptz'];
  email: Scalars['String'];
  /** An array relationship */
  experiments_experiments: Array<Experiments_Experiment>;
  /** An aggregate relationship */
  experiments_experiments_aggregate: Experiments_Experiment_Aggregate;
  /** An array relationship */
  experiments_figures: Array<Experiments_Figure>;
  /** An aggregate relationship */
  experiments_figures_aggregate: Experiments_Figure_Aggregate;
  /** An array relationship */
  experiments_projects: Array<Experiments_Project>;
  /** An aggregate relationship */
  experiments_projects_aggregate: Experiments_Project_Aggregate;
  first_name: Scalars['String'];
  id: Scalars['Int'];
  is_active: Scalars['Boolean'];
  is_staff: Scalars['Boolean'];
  is_superuser: Scalars['Boolean'];
  last_login?: Maybe<Scalars['timestamptz']>;
  last_name: Scalars['String'];
  /** An array relationship */
  measurement_biofiles: Array<Measurement_Biofile>;
  /** An aggregate relationship */
  measurement_biofiles_aggregate: Measurement_Biofile_Aggregate;
  /** An array relationship */
  measurement_taskusers: Array<Measurement_Taskuser>;
  /** An aggregate relationship */
  measurement_taskusers_aggregate: Measurement_Taskuser_Aggregate;
  organization: Scalars['String'];
  /** An array relationship */
  parts_catalog_experimentnodes: Array<Parts_Catalog_Experimentnode>;
  /** An aggregate relationship */
  parts_catalog_experimentnodes_aggregate: Parts_Catalog_Experimentnode_Aggregate;
  /** An array relationship */
  parts_catalog_noderelations: Array<Parts_Catalog_Noderelation>;
  /** An aggregate relationship */
  parts_catalog_noderelations_aggregate: Parts_Catalog_Noderelation_Aggregate;
  /** An array relationship */
  parts_catalog_nodes: Array<Parts_Catalog_Node>;
  /** An aggregate relationship */
  parts_catalog_nodes_aggregate: Parts_Catalog_Node_Aggregate;
  /** An array relationship */
  parts_catalog_simulationnodes: Array<Parts_Catalog_Simulationnode>;
  /** An aggregate relationship */
  parts_catalog_simulationnodes_aggregate: Parts_Catalog_Simulationnode_Aggregate;
  password: Scalars['String'];
  /** An array relationship */
  simulation_simulationresults: Array<Simulation_Simulationresult>;
  /** An aggregate relationship */
  simulation_simulationresults_aggregate: Simulation_Simulationresult_Aggregate;
  username: Scalars['String'];
};

/** columns and relationships of "users_customuser" */
export type Users_CustomuserExperiments_ExperimentsArgs = {
  distinct_on?: Maybe<Array<Experiments_Experiment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Experiment_Order_By>>;
  where?: Maybe<Experiments_Experiment_Bool_Exp>;
};

/** columns and relationships of "users_customuser" */
export type Users_CustomuserExperiments_Experiments_AggregateArgs = {
  distinct_on?: Maybe<Array<Experiments_Experiment_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Experiment_Order_By>>;
  where?: Maybe<Experiments_Experiment_Bool_Exp>;
};

/** columns and relationships of "users_customuser" */
export type Users_CustomuserExperiments_FiguresArgs = {
  distinct_on?: Maybe<Array<Experiments_Figure_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Figure_Order_By>>;
  where?: Maybe<Experiments_Figure_Bool_Exp>;
};

/** columns and relationships of "users_customuser" */
export type Users_CustomuserExperiments_Figures_AggregateArgs = {
  distinct_on?: Maybe<Array<Experiments_Figure_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Figure_Order_By>>;
  where?: Maybe<Experiments_Figure_Bool_Exp>;
};

/** columns and relationships of "users_customuser" */
export type Users_CustomuserExperiments_ProjectsArgs = {
  distinct_on?: Maybe<Array<Experiments_Project_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Project_Order_By>>;
  where?: Maybe<Experiments_Project_Bool_Exp>;
};

/** columns and relationships of "users_customuser" */
export type Users_CustomuserExperiments_Projects_AggregateArgs = {
  distinct_on?: Maybe<Array<Experiments_Project_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Experiments_Project_Order_By>>;
  where?: Maybe<Experiments_Project_Bool_Exp>;
};

/** columns and relationships of "users_customuser" */
export type Users_CustomuserMeasurement_BiofilesArgs = {
  distinct_on?: Maybe<Array<Measurement_Biofile_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Measurement_Biofile_Order_By>>;
  where?: Maybe<Measurement_Biofile_Bool_Exp>;
};

/** columns and relationships of "users_customuser" */
export type Users_CustomuserMeasurement_Biofiles_AggregateArgs = {
  distinct_on?: Maybe<Array<Measurement_Biofile_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Measurement_Biofile_Order_By>>;
  where?: Maybe<Measurement_Biofile_Bool_Exp>;
};

/** columns and relationships of "users_customuser" */
export type Users_CustomuserMeasurement_TaskusersArgs = {
  distinct_on?: Maybe<Array<Measurement_Taskuser_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Measurement_Taskuser_Order_By>>;
  where?: Maybe<Measurement_Taskuser_Bool_Exp>;
};

/** columns and relationships of "users_customuser" */
export type Users_CustomuserMeasurement_Taskusers_AggregateArgs = {
  distinct_on?: Maybe<Array<Measurement_Taskuser_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Measurement_Taskuser_Order_By>>;
  where?: Maybe<Measurement_Taskuser_Bool_Exp>;
};

/** columns and relationships of "users_customuser" */
export type Users_CustomuserParts_Catalog_ExperimentnodesArgs = {
  distinct_on?: Maybe<Array<Parts_Catalog_Experimentnode_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parts_Catalog_Experimentnode_Order_By>>;
  where?: Maybe<Parts_Catalog_Experimentnode_Bool_Exp>;
};

/** columns and relationships of "users_customuser" */
export type Users_CustomuserParts_Catalog_Experimentnodes_AggregateArgs = {
  distinct_on?: Maybe<Array<Parts_Catalog_Experimentnode_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parts_Catalog_Experimentnode_Order_By>>;
  where?: Maybe<Parts_Catalog_Experimentnode_Bool_Exp>;
};

/** columns and relationships of "users_customuser" */
export type Users_CustomuserParts_Catalog_NoderelationsArgs = {
  distinct_on?: Maybe<Array<Parts_Catalog_Noderelation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parts_Catalog_Noderelation_Order_By>>;
  where?: Maybe<Parts_Catalog_Noderelation_Bool_Exp>;
};

/** columns and relationships of "users_customuser" */
export type Users_CustomuserParts_Catalog_Noderelations_AggregateArgs = {
  distinct_on?: Maybe<Array<Parts_Catalog_Noderelation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parts_Catalog_Noderelation_Order_By>>;
  where?: Maybe<Parts_Catalog_Noderelation_Bool_Exp>;
};

/** columns and relationships of "users_customuser" */
export type Users_CustomuserParts_Catalog_NodesArgs = {
  distinct_on?: Maybe<Array<Parts_Catalog_Node_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parts_Catalog_Node_Order_By>>;
  where?: Maybe<Parts_Catalog_Node_Bool_Exp>;
};

/** columns and relationships of "users_customuser" */
export type Users_CustomuserParts_Catalog_Nodes_AggregateArgs = {
  distinct_on?: Maybe<Array<Parts_Catalog_Node_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parts_Catalog_Node_Order_By>>;
  where?: Maybe<Parts_Catalog_Node_Bool_Exp>;
};

/** columns and relationships of "users_customuser" */
export type Users_CustomuserParts_Catalog_SimulationnodesArgs = {
  distinct_on?: Maybe<Array<Parts_Catalog_Simulationnode_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parts_Catalog_Simulationnode_Order_By>>;
  where?: Maybe<Parts_Catalog_Simulationnode_Bool_Exp>;
};

/** columns and relationships of "users_customuser" */
export type Users_CustomuserParts_Catalog_Simulationnodes_AggregateArgs = {
  distinct_on?: Maybe<Array<Parts_Catalog_Simulationnode_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Parts_Catalog_Simulationnode_Order_By>>;
  where?: Maybe<Parts_Catalog_Simulationnode_Bool_Exp>;
};

/** columns and relationships of "users_customuser" */
export type Users_CustomuserSimulation_SimulationresultsArgs = {
  distinct_on?: Maybe<Array<Simulation_Simulationresult_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Simulation_Simulationresult_Order_By>>;
  where?: Maybe<Simulation_Simulationresult_Bool_Exp>;
};

/** columns and relationships of "users_customuser" */
export type Users_CustomuserSimulation_Simulationresults_AggregateArgs = {
  distinct_on?: Maybe<Array<Simulation_Simulationresult_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Simulation_Simulationresult_Order_By>>;
  where?: Maybe<Simulation_Simulationresult_Bool_Exp>;
};

/** aggregated selection of "users_customuser" */
export type Users_Customuser_Aggregate = {
  __typename?: 'users_customuser_aggregate';
  aggregate?: Maybe<Users_Customuser_Aggregate_Fields>;
  nodes: Array<Users_Customuser>;
};

/** aggregate fields of "users_customuser" */
export type Users_Customuser_Aggregate_Fields = {
  __typename?: 'users_customuser_aggregate_fields';
  avg?: Maybe<Users_Customuser_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Users_Customuser_Max_Fields>;
  min?: Maybe<Users_Customuser_Min_Fields>;
  stddev?: Maybe<Users_Customuser_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Customuser_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Customuser_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Customuser_Sum_Fields>;
  var_pop?: Maybe<Users_Customuser_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Customuser_Var_Samp_Fields>;
  variance?: Maybe<Users_Customuser_Variance_Fields>;
};

/** aggregate fields of "users_customuser" */
export type Users_Customuser_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Customuser_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Users_Customuser_Avg_Fields = {
  __typename?: 'users_customuser_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "users_customuser". All fields are combined with a logical 'AND'. */
export type Users_Customuser_Bool_Exp = {
  _and?: Maybe<Array<Users_Customuser_Bool_Exp>>;
  _not?: Maybe<Users_Customuser_Bool_Exp>;
  _or?: Maybe<Array<Users_Customuser_Bool_Exp>>;
  date_joined?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  experiments_experiments?: Maybe<Experiments_Experiment_Bool_Exp>;
  experiments_figures?: Maybe<Experiments_Figure_Bool_Exp>;
  experiments_projects?: Maybe<Experiments_Project_Bool_Exp>;
  first_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  is_active?: Maybe<Boolean_Comparison_Exp>;
  is_staff?: Maybe<Boolean_Comparison_Exp>;
  is_superuser?: Maybe<Boolean_Comparison_Exp>;
  last_login?: Maybe<Timestamptz_Comparison_Exp>;
  last_name?: Maybe<String_Comparison_Exp>;
  measurement_biofiles?: Maybe<Measurement_Biofile_Bool_Exp>;
  measurement_taskusers?: Maybe<Measurement_Taskuser_Bool_Exp>;
  organization?: Maybe<String_Comparison_Exp>;
  parts_catalog_experimentnodes?: Maybe<Parts_Catalog_Experimentnode_Bool_Exp>;
  parts_catalog_noderelations?: Maybe<Parts_Catalog_Noderelation_Bool_Exp>;
  parts_catalog_nodes?: Maybe<Parts_Catalog_Node_Bool_Exp>;
  parts_catalog_simulationnodes?: Maybe<Parts_Catalog_Simulationnode_Bool_Exp>;
  password?: Maybe<String_Comparison_Exp>;
  simulation_simulationresults?: Maybe<Simulation_Simulationresult_Bool_Exp>;
  username?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users_customuser" */
export enum Users_Customuser_Constraint {
  /** unique or primary key constraint */
  UsersCustomuserPkey = 'users_customuser_pkey',
  /** unique or primary key constraint */
  UsersCustomuserUsernameKey = 'users_customuser_username_key',
}

/** input type for incrementing numeric columns in table "users_customuser" */
export type Users_Customuser_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "users_customuser" */
export type Users_Customuser_Insert_Input = {
  date_joined?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  experiments_experiments?: Maybe<Experiments_Experiment_Arr_Rel_Insert_Input>;
  experiments_figures?: Maybe<Experiments_Figure_Arr_Rel_Insert_Input>;
  experiments_projects?: Maybe<Experiments_Project_Arr_Rel_Insert_Input>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  is_active?: Maybe<Scalars['Boolean']>;
  is_staff?: Maybe<Scalars['Boolean']>;
  is_superuser?: Maybe<Scalars['Boolean']>;
  last_login?: Maybe<Scalars['timestamptz']>;
  last_name?: Maybe<Scalars['String']>;
  measurement_biofiles?: Maybe<Measurement_Biofile_Arr_Rel_Insert_Input>;
  measurement_taskusers?: Maybe<Measurement_Taskuser_Arr_Rel_Insert_Input>;
  organization?: Maybe<Scalars['String']>;
  parts_catalog_experimentnodes?: Maybe<Parts_Catalog_Experimentnode_Arr_Rel_Insert_Input>;
  parts_catalog_noderelations?: Maybe<Parts_Catalog_Noderelation_Arr_Rel_Insert_Input>;
  parts_catalog_nodes?: Maybe<Parts_Catalog_Node_Arr_Rel_Insert_Input>;
  parts_catalog_simulationnodes?: Maybe<Parts_Catalog_Simulationnode_Arr_Rel_Insert_Input>;
  password?: Maybe<Scalars['String']>;
  simulation_simulationresults?: Maybe<Simulation_Simulationresult_Arr_Rel_Insert_Input>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Customuser_Max_Fields = {
  __typename?: 'users_customuser_max_fields';
  date_joined?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_login?: Maybe<Scalars['timestamptz']>;
  last_name?: Maybe<Scalars['String']>;
  organization?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Users_Customuser_Min_Fields = {
  __typename?: 'users_customuser_min_fields';
  date_joined?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_login?: Maybe<Scalars['timestamptz']>;
  last_name?: Maybe<Scalars['String']>;
  organization?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users_customuser" */
export type Users_Customuser_Mutation_Response = {
  __typename?: 'users_customuser_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users_Customuser>;
};

/** input type for inserting object relation for remote table "users_customuser" */
export type Users_Customuser_Obj_Rel_Insert_Input = {
  data: Users_Customuser_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Users_Customuser_On_Conflict>;
};

/** on conflict condition type for table "users_customuser" */
export type Users_Customuser_On_Conflict = {
  constraint: Users_Customuser_Constraint;
  update_columns?: Array<Users_Customuser_Update_Column>;
  where?: Maybe<Users_Customuser_Bool_Exp>;
};

/** Ordering options when selecting data from "users_customuser". */
export type Users_Customuser_Order_By = {
  date_joined?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  experiments_experiments_aggregate?: Maybe<Experiments_Experiment_Aggregate_Order_By>;
  experiments_figures_aggregate?: Maybe<Experiments_Figure_Aggregate_Order_By>;
  experiments_projects_aggregate?: Maybe<Experiments_Project_Aggregate_Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_active?: Maybe<Order_By>;
  is_staff?: Maybe<Order_By>;
  is_superuser?: Maybe<Order_By>;
  last_login?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  measurement_biofiles_aggregate?: Maybe<Measurement_Biofile_Aggregate_Order_By>;
  measurement_taskusers_aggregate?: Maybe<Measurement_Taskuser_Aggregate_Order_By>;
  organization?: Maybe<Order_By>;
  parts_catalog_experimentnodes_aggregate?: Maybe<Parts_Catalog_Experimentnode_Aggregate_Order_By>;
  parts_catalog_noderelations_aggregate?: Maybe<Parts_Catalog_Noderelation_Aggregate_Order_By>;
  parts_catalog_nodes_aggregate?: Maybe<Parts_Catalog_Node_Aggregate_Order_By>;
  parts_catalog_simulationnodes_aggregate?: Maybe<Parts_Catalog_Simulationnode_Aggregate_Order_By>;
  password?: Maybe<Order_By>;
  simulation_simulationresults_aggregate?: Maybe<Simulation_Simulationresult_Aggregate_Order_By>;
  username?: Maybe<Order_By>;
};

/** primary key columns input for table: users_customuser */
export type Users_Customuser_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "users_customuser" */
export enum Users_Customuser_Select_Column {
  /** column name */
  DateJoined = 'date_joined',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  IsStaff = 'is_staff',
  /** column name */
  IsSuperuser = 'is_superuser',
  /** column name */
  LastLogin = 'last_login',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Organization = 'organization',
  /** column name */
  Password = 'password',
  /** column name */
  Username = 'username',
}

/** input type for updating data in table "users_customuser" */
export type Users_Customuser_Set_Input = {
  date_joined?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  is_active?: Maybe<Scalars['Boolean']>;
  is_staff?: Maybe<Scalars['Boolean']>;
  is_superuser?: Maybe<Scalars['Boolean']>;
  last_login?: Maybe<Scalars['timestamptz']>;
  last_name?: Maybe<Scalars['String']>;
  organization?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Users_Customuser_Stddev_Fields = {
  __typename?: 'users_customuser_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Users_Customuser_Stddev_Pop_Fields = {
  __typename?: 'users_customuser_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Users_Customuser_Stddev_Samp_Fields = {
  __typename?: 'users_customuser_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Users_Customuser_Sum_Fields = {
  __typename?: 'users_customuser_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "users_customuser" */
export enum Users_Customuser_Update_Column {
  /** column name */
  DateJoined = 'date_joined',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  IsStaff = 'is_staff',
  /** column name */
  IsSuperuser = 'is_superuser',
  /** column name */
  LastLogin = 'last_login',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Organization = 'organization',
  /** column name */
  Password = 'password',
  /** column name */
  Username = 'username',
}

/** aggregate var_pop on columns */
export type Users_Customuser_Var_Pop_Fields = {
  __typename?: 'users_customuser_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Users_Customuser_Var_Samp_Fields = {
  __typename?: 'users_customuser_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Users_Customuser_Variance_Fields = {
  __typename?: 'users_customuser_variance_fields';
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

export type ConstructFieldsFragment = { __typename?: 'construct' } & Pick<
  Construct,
  'id' | 'name'
>;

export type ConstructPartFieldsFragment = {
  __typename?: 'construct_part';
} & Pick<
  Construct_Part,
  'construct_id' | 'id' | 'index' | 'orientation' | 'part_id'
>;

export type ConstructQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;

export type ConstructQuery = { __typename?: 'query_root' } & {
  construct: Array<
    { __typename?: 'construct' } & {
      construct_projects: Array<
        { __typename?: 'project_construct' } & Pick<
          Project_Construct,
          'project_id'
        >
      >;
      construct_parts: Array<
        { __typename?: 'construct_part' } & {
          construct: { __typename?: 'construct' } & ConstructFieldsFragment;
          part: { __typename?: 'part' } & PartFieldsFragment;
        } & ConstructPartFieldsFragment
      >;
    } & ConstructFieldsFragment
  >;
};

export type CreateConstructMutationVariables = Exact<{
  input: Construct_Insert_Input;
}>;

export type CreateConstructMutation = { __typename?: 'mutation_root' } & {
  insert_construct_one?: Maybe<
    { __typename?: 'construct' } & ConstructFieldsFragment
  >;
};

export type UpdateConstructMutationVariables = Exact<{
  id: Scalars['uuid'];
  input: Construct_Set_Input;
}>;

export type UpdateConstructMutation = { __typename?: 'mutation_root' } & {
  update_construct_by_pk?: Maybe<
    { __typename?: 'construct' } & ConstructFieldsFragment
  >;
};

export type InsertConstructPartMutationVariables = Exact<{
  construct_id: Scalars['uuid'];
  input: Array<Construct_Part_Insert_Input> | Construct_Part_Insert_Input;
}>;

export type InsertConstructPartMutation = { __typename?: 'mutation_root' } & {
  delete_construct_part?: Maybe<
    { __typename?: 'construct_part_mutation_response' } & Pick<
      Construct_Part_Mutation_Response,
      'affected_rows'
    >
  >;
  insert_construct_part?: Maybe<
    { __typename?: 'construct_part_mutation_response' } & {
      returning: Array<
        { __typename?: 'construct_part' } & ConstructPartFieldsFragment
      >;
    }
  >;
};

export type PartFieldsFragment = { __typename?: 'part' } & Pick<
  Part,
  'alias' | 'description' | 'id' | 'name' | 'sequence' | 'sequence_length'
> & {
    part_type?: Maybe<
      { __typename?: 'part_type' } & Pick<Part_Type, 'glyph' | 'name'>
    >;
  };

export type PartsQueryVariables = Exact<{ [key: string]: never }>;

export type PartsQuery = { __typename?: 'query_root' } & {
  part: Array<{ __typename?: 'part' } & PartFieldsFragment>;
};

export type ProjectFieldsFragment = { __typename?: 'project' } & Pick<
  Project,
  'id' | 'name' | 'description'
>;

export type ProjectsQueryVariables = Exact<{ [key: string]: never }>;

export type ProjectsQuery = { __typename?: 'query_root' } & {
  project: Array<
    { __typename?: 'project' } & {
      project_constructs: Array<
        { __typename?: 'project_construct' } & {
          construct: { __typename?: 'construct' } & ConstructFieldsFragment;
        }
      >;
    } & ProjectFieldsFragment
  >;
};

export type ProjectQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;

export type ProjectQuery = { __typename?: 'query_root' } & {
  project: Array<{ __typename?: 'project' } & ProjectFieldsFragment>;
};

export type CreateProjectMutationVariables = Exact<{
  input: Project_Insert_Input;
}>;

export type CreateProjectMutation = { __typename?: 'mutation_root' } & {
  insert_project_one?: Maybe<
    { __typename?: 'project' } & Pick<Project, 'id' | 'name'>
  >;
};

export type UpdateProjectMutationVariables = Exact<{
  id: Scalars['uuid'];
  input: Project_Set_Input;
}>;

export type UpdateProjectMutation = { __typename?: 'mutation_root' } & {
  update_project_by_pk?: Maybe<
    { __typename?: 'project' } & ProjectFieldsFragment
  >;
};

export type CreateProjectConstructMutationVariables = Exact<{
  input: Project_Construct_Insert_Input;
}>;

export type CreateProjectConstructMutation = {
  __typename?: 'mutation_root';
} & {
  insert_project_construct_one?: Maybe<
    { __typename?: 'project_construct' } & Pick<
      Project_Construct,
      'project_id' | 'construct_id'
    >
  >;
};

export const ConstructFieldsFragmentDoc = gql`
  fragment ConstructFields on construct {
    id
    name
  }
`;
export const ConstructPartFieldsFragmentDoc = gql`
  fragment ConstructPartFields on construct_part {
    construct_id
    id
    index
    orientation
    part_id
  }
`;
export const PartFieldsFragmentDoc = gql`
  fragment PartFields on part {
    alias
    description
    id
    name
    sequence
    sequence_length
    part_type {
      glyph
      name
    }
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
    construct(where: { id: { _eq: $id } }) {
      ...ConstructFields
      construct_projects {
        project_id
      }
      construct_parts(order_by: { index: asc }) {
        ...ConstructPartFields
        construct {
          ...ConstructFields
        }
        part {
          ...PartFields
        }
      }
    }
  }
  ${ConstructFieldsFragmentDoc}
  ${ConstructPartFieldsFragmentDoc}
  ${PartFieldsFragmentDoc}
`;
export const CreateConstructDocument = gql`
  mutation CreateConstruct($input: construct_insert_input!) {
    insert_construct_one(object: $input) {
      ...ConstructFields
    }
  }
  ${ConstructFieldsFragmentDoc}
`;
export const UpdateConstructDocument = gql`
  mutation UpdateConstruct($id: uuid!, $input: construct_set_input!) {
    update_construct_by_pk(pk_columns: { id: $id }, _set: $input) {
      ...ConstructFields
    }
  }
  ${ConstructFieldsFragmentDoc}
`;
export const InsertConstructPartDocument = gql`
  mutation InsertConstructPart(
    $construct_id: uuid!
    $input: [construct_part_insert_input!]!
  ) {
    delete_construct_part(where: { construct_id: { _eq: $construct_id } }) {
      affected_rows
    }
    insert_construct_part(
      objects: $input
      on_conflict: {
        constraint: construct_part_pkey
        update_columns: [index, orientation, part_id]
      }
    ) {
      returning {
        ...ConstructPartFields
      }
    }
  }
  ${ConstructPartFieldsFragmentDoc}
`;
export const PartsDocument = gql`
  query Parts {
    part(order_by: { part_type_id: desc }) {
      ...PartFields
    }
  }
  ${PartFieldsFragmentDoc}
`;
export const ProjectsDocument = gql`
  query Projects {
    project(order_by: { created_at: desc }) {
      ...ProjectFields
      project_constructs(order_by: { construct: { created_at: desc } }) {
        construct {
          ...ConstructFields
        }
      }
    }
  }
  ${ProjectFieldsFragmentDoc}
  ${ConstructFieldsFragmentDoc}
`;
export const ProjectDocument = gql`
  query Project($id: uuid!) {
    project(where: { id: { _eq: $id } }) {
      ...ProjectFields
    }
  }
  ${ProjectFieldsFragmentDoc}
`;
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
    update_project_by_pk(pk_columns: { id: $id }, _set: $input) {
      ...ProjectFields
    }
  }
  ${ProjectFieldsFragmentDoc}
`;
export const CreateProjectConstructDocument = gql`
  mutation CreateProjectConstruct($input: project_construct_insert_input!) {
    insert_project_construct_one(object: $input) {
      project_id
      construct_id
    }
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    Construct(
      variables: ConstructQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<ConstructQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ConstructQuery>(ConstructDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'Construct'
      );
    },
    CreateConstruct(
      variables: CreateConstructMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<CreateConstructMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateConstructMutation>(
            CreateConstructDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'CreateConstruct'
      );
    },
    UpdateConstruct(
      variables: UpdateConstructMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<UpdateConstructMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdateConstructMutation>(
            UpdateConstructDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'UpdateConstruct'
      );
    },
    InsertConstructPart(
      variables: InsertConstructPartMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<InsertConstructPartMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<InsertConstructPartMutation>(
            InsertConstructPartDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'InsertConstructPart'
      );
    },
    Parts(
      variables?: PartsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<PartsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<PartsQuery>(PartsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'Parts'
      );
    },
    Projects(
      variables?: ProjectsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<ProjectsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ProjectsQuery>(ProjectsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'Projects'
      );
    },
    Project(
      variables: ProjectQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<ProjectQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ProjectQuery>(ProjectDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'Project'
      );
    },
    CreateProject(
      variables: CreateProjectMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<CreateProjectMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateProjectMutation>(
            CreateProjectDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'CreateProject'
      );
    },
    UpdateProject(
      variables: UpdateProjectMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<UpdateProjectMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdateProjectMutation>(
            UpdateProjectDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'UpdateProject'
      );
    },
    CreateProjectConstruct(
      variables: CreateProjectConstructMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<CreateProjectConstructMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateProjectConstructMutation>(
            CreateProjectConstructDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'CreateProjectConstruct'
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export function getSdkWithHooks(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  const sdk = getSdk(client, withWrapper);
  return {
    ...sdk,
    useConstruct(
      key: SWRKeyInterface,
      variables: ConstructQueryVariables,
      config?: SWRConfigInterface<ConstructQuery, ClientError>
    ) {
      return useSWR<ConstructQuery, ClientError>(
        key,
        () => sdk.Construct(variables),
        config
      );
    },
    useParts(
      key: SWRKeyInterface,
      variables?: PartsQueryVariables,
      config?: SWRConfigInterface<PartsQuery, ClientError>
    ) {
      return useSWR<PartsQuery, ClientError>(
        key,
        () => sdk.Parts(variables),
        config
      );
    },
    useProjects(
      key: SWRKeyInterface,
      variables?: ProjectsQueryVariables,
      config?: SWRConfigInterface<ProjectsQuery, ClientError>
    ) {
      return useSWR<ProjectsQuery, ClientError>(
        key,
        () => sdk.Projects(variables),
        config
      );
    },
    useProject(
      key: SWRKeyInterface,
      variables: ProjectQueryVariables,
      config?: SWRConfigInterface<ProjectQuery, ClientError>
    ) {
      return useSWR<ProjectQuery, ClientError>(
        key,
        () => sdk.Project(variables),
        config
      );
    },
  };
}
export type SdkWithHooks = ReturnType<typeof getSdkWithHooks>;
