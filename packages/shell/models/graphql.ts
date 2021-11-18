import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { gql } from 'graphql-request';
import { ClientError } from 'graphql-request/dist/types';
import useSWR, {
  SWRConfiguration as SWRConfigInterface,
  Key as SWRKeyInterface,
} from 'swr';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
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

/** columns and relationships of "annotation" */
export type Annotation = {
  __typename?: 'annotation';
  color?: Maybe<Scalars['String']>;
  /** An object relationship */
  construct?: Maybe<Construct>;
  construct_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  construct_part?: Maybe<Construct_Part>;
  construct_part_id?: Maybe<Scalars['uuid']>;
  created_at: Scalars['timestamptz'];
  created_by_id?: Maybe<Scalars['Int']>;
  direction?: Maybe<Scalars['String']>;
  end?: Maybe<Scalars['Int']>;
  id: Scalars['uuid'];
  label?: Maybe<Scalars['String']>;
  part_id?: Maybe<Scalars['uuid']>;
  start?: Maybe<Scalars['Int']>;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user?: Maybe<User>;
};

/** aggregated selection of "annotation" */
export type Annotation_Aggregate = {
  __typename?: 'annotation_aggregate';
  aggregate?: Maybe<Annotation_Aggregate_Fields>;
  nodes: Array<Annotation>;
};

/** aggregate fields of "annotation" */
export type Annotation_Aggregate_Fields = {
  __typename?: 'annotation_aggregate_fields';
  avg?: Maybe<Annotation_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Annotation_Max_Fields>;
  min?: Maybe<Annotation_Min_Fields>;
  stddev?: Maybe<Annotation_Stddev_Fields>;
  stddev_pop?: Maybe<Annotation_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Annotation_Stddev_Samp_Fields>;
  sum?: Maybe<Annotation_Sum_Fields>;
  var_pop?: Maybe<Annotation_Var_Pop_Fields>;
  var_samp?: Maybe<Annotation_Var_Samp_Fields>;
  variance?: Maybe<Annotation_Variance_Fields>;
};

/** aggregate fields of "annotation" */
export type Annotation_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Annotation_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "annotation" */
export type Annotation_Aggregate_Order_By = {
  avg?: Maybe<Annotation_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Annotation_Max_Order_By>;
  min?: Maybe<Annotation_Min_Order_By>;
  stddev?: Maybe<Annotation_Stddev_Order_By>;
  stddev_pop?: Maybe<Annotation_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Annotation_Stddev_Samp_Order_By>;
  sum?: Maybe<Annotation_Sum_Order_By>;
  var_pop?: Maybe<Annotation_Var_Pop_Order_By>;
  var_samp?: Maybe<Annotation_Var_Samp_Order_By>;
  variance?: Maybe<Annotation_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "annotation" */
export type Annotation_Arr_Rel_Insert_Input = {
  data: Array<Annotation_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Annotation_On_Conflict>;
};

/** aggregate avg on columns */
export type Annotation_Avg_Fields = {
  __typename?: 'annotation_avg_fields';
  created_by_id?: Maybe<Scalars['Float']>;
  end?: Maybe<Scalars['Float']>;
  start?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "annotation" */
export type Annotation_Avg_Order_By = {
  created_by_id?: Maybe<Order_By>;
  end?: Maybe<Order_By>;
  start?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "annotation". All fields are combined with a logical 'AND'. */
export type Annotation_Bool_Exp = {
  _and?: Maybe<Array<Annotation_Bool_Exp>>;
  _not?: Maybe<Annotation_Bool_Exp>;
  _or?: Maybe<Array<Annotation_Bool_Exp>>;
  color?: Maybe<String_Comparison_Exp>;
  construct?: Maybe<Construct_Bool_Exp>;
  construct_id?: Maybe<Uuid_Comparison_Exp>;
  construct_part?: Maybe<Construct_Part_Bool_Exp>;
  construct_part_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  created_by_id?: Maybe<Int_Comparison_Exp>;
  direction?: Maybe<String_Comparison_Exp>;
  end?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  label?: Maybe<String_Comparison_Exp>;
  part_id?: Maybe<Uuid_Comparison_Exp>;
  start?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
};

/** unique or primary key constraints on table "annotation" */
export enum Annotation_Constraint {
  /** unique or primary key constraint */
  AnnotationPkey = 'annotation_pkey',
}

/** input type for incrementing numeric columns in table "annotation" */
export type Annotation_Inc_Input = {
  created_by_id?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "annotation" */
export type Annotation_Insert_Input = {
  color?: Maybe<Scalars['String']>;
  construct?: Maybe<Construct_Obj_Rel_Insert_Input>;
  construct_id?: Maybe<Scalars['uuid']>;
  construct_part?: Maybe<Construct_Part_Obj_Rel_Insert_Input>;
  construct_part_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['Int']>;
  direction?: Maybe<Scalars['String']>;
  end?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  label?: Maybe<Scalars['String']>;
  part_id?: Maybe<Scalars['uuid']>;
  start?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Annotation_Max_Fields = {
  __typename?: 'annotation_max_fields';
  color?: Maybe<Scalars['String']>;
  construct_id?: Maybe<Scalars['uuid']>;
  construct_part_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['Int']>;
  direction?: Maybe<Scalars['String']>;
  end?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  label?: Maybe<Scalars['String']>;
  part_id?: Maybe<Scalars['uuid']>;
  start?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "annotation" */
export type Annotation_Max_Order_By = {
  color?: Maybe<Order_By>;
  construct_id?: Maybe<Order_By>;
  construct_part_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  direction?: Maybe<Order_By>;
  end?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  label?: Maybe<Order_By>;
  part_id?: Maybe<Order_By>;
  start?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Annotation_Min_Fields = {
  __typename?: 'annotation_min_fields';
  color?: Maybe<Scalars['String']>;
  construct_id?: Maybe<Scalars['uuid']>;
  construct_part_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['Int']>;
  direction?: Maybe<Scalars['String']>;
  end?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  label?: Maybe<Scalars['String']>;
  part_id?: Maybe<Scalars['uuid']>;
  start?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "annotation" */
export type Annotation_Min_Order_By = {
  color?: Maybe<Order_By>;
  construct_id?: Maybe<Order_By>;
  construct_part_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  direction?: Maybe<Order_By>;
  end?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  label?: Maybe<Order_By>;
  part_id?: Maybe<Order_By>;
  start?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "annotation" */
export type Annotation_Mutation_Response = {
  __typename?: 'annotation_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Annotation>;
};

/** on conflict condition type for table "annotation" */
export type Annotation_On_Conflict = {
  constraint: Annotation_Constraint;
  update_columns?: Array<Annotation_Update_Column>;
  where?: Maybe<Annotation_Bool_Exp>;
};

/** Ordering options when selecting data from "annotation". */
export type Annotation_Order_By = {
  color?: Maybe<Order_By>;
  construct?: Maybe<Construct_Order_By>;
  construct_id?: Maybe<Order_By>;
  construct_part?: Maybe<Construct_Part_Order_By>;
  construct_part_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  direction?: Maybe<Order_By>;
  end?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  label?: Maybe<Order_By>;
  part_id?: Maybe<Order_By>;
  start?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
};

/** primary key columns input for table: annotation */
export type Annotation_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "annotation" */
export enum Annotation_Select_Column {
  /** column name */
  Color = 'color',
  /** column name */
  ConstructId = 'construct_id',
  /** column name */
  ConstructPartId = 'construct_part_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  Direction = 'direction',
  /** column name */
  End = 'end',
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
  /** column name */
  PartId = 'part_id',
  /** column name */
  Start = 'start',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "annotation" */
export type Annotation_Set_Input = {
  color?: Maybe<Scalars['String']>;
  construct_id?: Maybe<Scalars['uuid']>;
  construct_part_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['Int']>;
  direction?: Maybe<Scalars['String']>;
  end?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  label?: Maybe<Scalars['String']>;
  part_id?: Maybe<Scalars['uuid']>;
  start?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Annotation_Stddev_Fields = {
  __typename?: 'annotation_stddev_fields';
  created_by_id?: Maybe<Scalars['Float']>;
  end?: Maybe<Scalars['Float']>;
  start?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "annotation" */
export type Annotation_Stddev_Order_By = {
  created_by_id?: Maybe<Order_By>;
  end?: Maybe<Order_By>;
  start?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Annotation_Stddev_Pop_Fields = {
  __typename?: 'annotation_stddev_pop_fields';
  created_by_id?: Maybe<Scalars['Float']>;
  end?: Maybe<Scalars['Float']>;
  start?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "annotation" */
export type Annotation_Stddev_Pop_Order_By = {
  created_by_id?: Maybe<Order_By>;
  end?: Maybe<Order_By>;
  start?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Annotation_Stddev_Samp_Fields = {
  __typename?: 'annotation_stddev_samp_fields';
  created_by_id?: Maybe<Scalars['Float']>;
  end?: Maybe<Scalars['Float']>;
  start?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "annotation" */
export type Annotation_Stddev_Samp_Order_By = {
  created_by_id?: Maybe<Order_By>;
  end?: Maybe<Order_By>;
  start?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Annotation_Sum_Fields = {
  __typename?: 'annotation_sum_fields';
  created_by_id?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "annotation" */
export type Annotation_Sum_Order_By = {
  created_by_id?: Maybe<Order_By>;
  end?: Maybe<Order_By>;
  start?: Maybe<Order_By>;
};

/** update columns of table "annotation" */
export enum Annotation_Update_Column {
  /** column name */
  Color = 'color',
  /** column name */
  ConstructId = 'construct_id',
  /** column name */
  ConstructPartId = 'construct_part_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  Direction = 'direction',
  /** column name */
  End = 'end',
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
  /** column name */
  PartId = 'part_id',
  /** column name */
  Start = 'start',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Annotation_Var_Pop_Fields = {
  __typename?: 'annotation_var_pop_fields';
  created_by_id?: Maybe<Scalars['Float']>;
  end?: Maybe<Scalars['Float']>;
  start?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "annotation" */
export type Annotation_Var_Pop_Order_By = {
  created_by_id?: Maybe<Order_By>;
  end?: Maybe<Order_By>;
  start?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Annotation_Var_Samp_Fields = {
  __typename?: 'annotation_var_samp_fields';
  created_by_id?: Maybe<Scalars['Float']>;
  end?: Maybe<Scalars['Float']>;
  start?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "annotation" */
export type Annotation_Var_Samp_Order_By = {
  created_by_id?: Maybe<Order_By>;
  end?: Maybe<Order_By>;
  start?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Annotation_Variance_Fields = {
  __typename?: 'annotation_variance_fields';
  created_by_id?: Maybe<Scalars['Float']>;
  end?: Maybe<Scalars['Float']>;
  start?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "annotation" */
export type Annotation_Variance_Order_By = {
  created_by_id?: Maybe<Order_By>;
  end?: Maybe<Order_By>;
  start?: Maybe<Order_By>;
};

/** columns and relationships of "chassis" */
export type Chassis = {
  __typename?: 'chassis';
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  organizations: Array<Chassis_Organization>;
  /** An aggregate relationship */
  organizations_aggregate: Chassis_Organization_Aggregate;
  /** An array relationship */
  parts: Array<Part>;
  /** An aggregate relationship */
  parts_aggregate: Part_Aggregate;
};

/** columns and relationships of "chassis" */
export type ChassisOrganizationsArgs = {
  distinct_on?: Maybe<Array<Chassis_Organization_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chassis_Organization_Order_By>>;
  where?: Maybe<Chassis_Organization_Bool_Exp>;
};

/** columns and relationships of "chassis" */
export type ChassisOrganizations_AggregateArgs = {
  distinct_on?: Maybe<Array<Chassis_Organization_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chassis_Organization_Order_By>>;
  where?: Maybe<Chassis_Organization_Bool_Exp>;
};

/** columns and relationships of "chassis" */
export type ChassisPartsArgs = {
  distinct_on?: Maybe<Array<Part_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Part_Order_By>>;
  where?: Maybe<Part_Bool_Exp>;
};

/** columns and relationships of "chassis" */
export type ChassisParts_AggregateArgs = {
  distinct_on?: Maybe<Array<Part_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Part_Order_By>>;
  where?: Maybe<Part_Bool_Exp>;
};

/** aggregated selection of "chassis" */
export type Chassis_Aggregate = {
  __typename?: 'chassis_aggregate';
  aggregate?: Maybe<Chassis_Aggregate_Fields>;
  nodes: Array<Chassis>;
};

/** aggregate fields of "chassis" */
export type Chassis_Aggregate_Fields = {
  __typename?: 'chassis_aggregate_fields';
  avg?: Maybe<Chassis_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Chassis_Max_Fields>;
  min?: Maybe<Chassis_Min_Fields>;
  stddev?: Maybe<Chassis_Stddev_Fields>;
  stddev_pop?: Maybe<Chassis_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Chassis_Stddev_Samp_Fields>;
  sum?: Maybe<Chassis_Sum_Fields>;
  var_pop?: Maybe<Chassis_Var_Pop_Fields>;
  var_samp?: Maybe<Chassis_Var_Samp_Fields>;
  variance?: Maybe<Chassis_Variance_Fields>;
};

/** aggregate fields of "chassis" */
export type Chassis_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Chassis_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Chassis_Avg_Fields = {
  __typename?: 'chassis_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "chassis". All fields are combined with a logical 'AND'. */
export type Chassis_Bool_Exp = {
  _and?: Maybe<Array<Chassis_Bool_Exp>>;
  _not?: Maybe<Chassis_Bool_Exp>;
  _or?: Maybe<Array<Chassis_Bool_Exp>>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  organizations?: Maybe<Chassis_Organization_Bool_Exp>;
  parts?: Maybe<Part_Bool_Exp>;
};

/** unique or primary key constraints on table "chassis" */
export enum Chassis_Constraint {
  /** unique or primary key constraint */
  ChassisPkey = 'chassis_pkey',
}

/** input type for incrementing numeric columns in table "chassis" */
export type Chassis_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "chassis" */
export type Chassis_Insert_Input = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  organizations?: Maybe<Chassis_Organization_Arr_Rel_Insert_Input>;
  parts?: Maybe<Part_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Chassis_Max_Fields = {
  __typename?: 'chassis_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Chassis_Min_Fields = {
  __typename?: 'chassis_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "chassis" */
export type Chassis_Mutation_Response = {
  __typename?: 'chassis_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Chassis>;
};

/** input type for inserting object relation for remote table "chassis" */
export type Chassis_Obj_Rel_Insert_Input = {
  data: Chassis_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Chassis_On_Conflict>;
};

/** on conflict condition type for table "chassis" */
export type Chassis_On_Conflict = {
  constraint: Chassis_Constraint;
  update_columns?: Array<Chassis_Update_Column>;
  where?: Maybe<Chassis_Bool_Exp>;
};

/** Ordering options when selecting data from "chassis". */
export type Chassis_Order_By = {
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organizations_aggregate?: Maybe<Chassis_Organization_Aggregate_Order_By>;
  parts_aggregate?: Maybe<Part_Aggregate_Order_By>;
};

/** columns and relationships of "chassis_organization" */
export type Chassis_Organization = {
  __typename?: 'chassis_organization';
  /** An object relationship */
  chassis?: Maybe<Chassis>;
  chassis_id: Scalars['Int'];
  id: Scalars['Int'];
  /** An object relationship */
  organization?: Maybe<Organization>;
  organization_id: Scalars['Int'];
};

/** aggregated selection of "chassis_organization" */
export type Chassis_Organization_Aggregate = {
  __typename?: 'chassis_organization_aggregate';
  aggregate?: Maybe<Chassis_Organization_Aggregate_Fields>;
  nodes: Array<Chassis_Organization>;
};

/** aggregate fields of "chassis_organization" */
export type Chassis_Organization_Aggregate_Fields = {
  __typename?: 'chassis_organization_aggregate_fields';
  avg?: Maybe<Chassis_Organization_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Chassis_Organization_Max_Fields>;
  min?: Maybe<Chassis_Organization_Min_Fields>;
  stddev?: Maybe<Chassis_Organization_Stddev_Fields>;
  stddev_pop?: Maybe<Chassis_Organization_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Chassis_Organization_Stddev_Samp_Fields>;
  sum?: Maybe<Chassis_Organization_Sum_Fields>;
  var_pop?: Maybe<Chassis_Organization_Var_Pop_Fields>;
  var_samp?: Maybe<Chassis_Organization_Var_Samp_Fields>;
  variance?: Maybe<Chassis_Organization_Variance_Fields>;
};

/** aggregate fields of "chassis_organization" */
export type Chassis_Organization_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Chassis_Organization_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "chassis_organization" */
export type Chassis_Organization_Aggregate_Order_By = {
  avg?: Maybe<Chassis_Organization_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Chassis_Organization_Max_Order_By>;
  min?: Maybe<Chassis_Organization_Min_Order_By>;
  stddev?: Maybe<Chassis_Organization_Stddev_Order_By>;
  stddev_pop?: Maybe<Chassis_Organization_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Chassis_Organization_Stddev_Samp_Order_By>;
  sum?: Maybe<Chassis_Organization_Sum_Order_By>;
  var_pop?: Maybe<Chassis_Organization_Var_Pop_Order_By>;
  var_samp?: Maybe<Chassis_Organization_Var_Samp_Order_By>;
  variance?: Maybe<Chassis_Organization_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "chassis_organization" */
export type Chassis_Organization_Arr_Rel_Insert_Input = {
  data: Array<Chassis_Organization_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Chassis_Organization_On_Conflict>;
};

/** aggregate avg on columns */
export type Chassis_Organization_Avg_Fields = {
  __typename?: 'chassis_organization_avg_fields';
  chassis_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "chassis_organization" */
export type Chassis_Organization_Avg_Order_By = {
  chassis_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "chassis_organization". All fields are combined with a logical 'AND'. */
export type Chassis_Organization_Bool_Exp = {
  _and?: Maybe<Array<Chassis_Organization_Bool_Exp>>;
  _not?: Maybe<Chassis_Organization_Bool_Exp>;
  _or?: Maybe<Array<Chassis_Organization_Bool_Exp>>;
  chassis?: Maybe<Chassis_Bool_Exp>;
  chassis_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  organization?: Maybe<Organization_Bool_Exp>;
  organization_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "chassis_organization" */
export enum Chassis_Organization_Constraint {
  /** unique or primary key constraint */
  ChassisOrganizationChassisIdOrganizationIdKey = 'chassis_organization_chassis_id_organization_id_key',
  /** unique or primary key constraint */
  ChassisOrganizationPkey = 'chassis_organization_pkey',
}

/** input type for incrementing numeric columns in table "chassis_organization" */
export type Chassis_Organization_Inc_Input = {
  chassis_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "chassis_organization" */
export type Chassis_Organization_Insert_Input = {
  chassis?: Maybe<Chassis_Obj_Rel_Insert_Input>;
  chassis_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  organization?: Maybe<Organization_Obj_Rel_Insert_Input>;
  organization_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Chassis_Organization_Max_Fields = {
  __typename?: 'chassis_organization_max_fields';
  chassis_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "chassis_organization" */
export type Chassis_Organization_Max_Order_By = {
  chassis_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Chassis_Organization_Min_Fields = {
  __typename?: 'chassis_organization_min_fields';
  chassis_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "chassis_organization" */
export type Chassis_Organization_Min_Order_By = {
  chassis_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "chassis_organization" */
export type Chassis_Organization_Mutation_Response = {
  __typename?: 'chassis_organization_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Chassis_Organization>;
};

/** on conflict condition type for table "chassis_organization" */
export type Chassis_Organization_On_Conflict = {
  constraint: Chassis_Organization_Constraint;
  update_columns?: Array<Chassis_Organization_Update_Column>;
  where?: Maybe<Chassis_Organization_Bool_Exp>;
};

/** Ordering options when selecting data from "chassis_organization". */
export type Chassis_Organization_Order_By = {
  chassis?: Maybe<Chassis_Order_By>;
  chassis_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization?: Maybe<Organization_Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** primary key columns input for table: chassis_organization */
export type Chassis_Organization_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "chassis_organization" */
export enum Chassis_Organization_Select_Column {
  /** column name */
  ChassisId = 'chassis_id',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organization_id',
}

/** input type for updating data in table "chassis_organization" */
export type Chassis_Organization_Set_Input = {
  chassis_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Chassis_Organization_Stddev_Fields = {
  __typename?: 'chassis_organization_stddev_fields';
  chassis_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "chassis_organization" */
export type Chassis_Organization_Stddev_Order_By = {
  chassis_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Chassis_Organization_Stddev_Pop_Fields = {
  __typename?: 'chassis_organization_stddev_pop_fields';
  chassis_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "chassis_organization" */
export type Chassis_Organization_Stddev_Pop_Order_By = {
  chassis_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Chassis_Organization_Stddev_Samp_Fields = {
  __typename?: 'chassis_organization_stddev_samp_fields';
  chassis_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "chassis_organization" */
export type Chassis_Organization_Stddev_Samp_Order_By = {
  chassis_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Chassis_Organization_Sum_Fields = {
  __typename?: 'chassis_organization_sum_fields';
  chassis_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  organization_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "chassis_organization" */
export type Chassis_Organization_Sum_Order_By = {
  chassis_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** update columns of table "chassis_organization" */
export enum Chassis_Organization_Update_Column {
  /** column name */
  ChassisId = 'chassis_id',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organization_id',
}

/** aggregate var_pop on columns */
export type Chassis_Organization_Var_Pop_Fields = {
  __typename?: 'chassis_organization_var_pop_fields';
  chassis_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "chassis_organization" */
export type Chassis_Organization_Var_Pop_Order_By = {
  chassis_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Chassis_Organization_Var_Samp_Fields = {
  __typename?: 'chassis_organization_var_samp_fields';
  chassis_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "chassis_organization" */
export type Chassis_Organization_Var_Samp_Order_By = {
  chassis_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Chassis_Organization_Variance_Fields = {
  __typename?: 'chassis_organization_variance_fields';
  chassis_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  organization_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "chassis_organization" */
export type Chassis_Organization_Variance_Order_By = {
  chassis_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** primary key columns input for table: chassis */
export type Chassis_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "chassis" */
export enum Chassis_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "chassis" */
export type Chassis_Set_Input = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Chassis_Stddev_Fields = {
  __typename?: 'chassis_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Chassis_Stddev_Pop_Fields = {
  __typename?: 'chassis_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Chassis_Stddev_Samp_Fields = {
  __typename?: 'chassis_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Chassis_Sum_Fields = {
  __typename?: 'chassis_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "chassis" */
export enum Chassis_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

/** aggregate var_pop on columns */
export type Chassis_Var_Pop_Fields = {
  __typename?: 'chassis_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Chassis_Var_Samp_Fields = {
  __typename?: 'chassis_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Chassis_Variance_Fields = {
  __typename?: 'chassis_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "construct" */
export type Construct = {
  __typename?: 'construct';
  /** An array relationship */
  annotations: Array<Annotation>;
  /** An aggregate relationship */
  annotations_aggregate: Annotation_Aggregate;
  created_at: Scalars['timestamptz'];
  created_by_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  folder?: Maybe<Folder>;
  folder_id?: Maybe<Scalars['uuid']>;
  id: Scalars['uuid'];
  is_template: Scalars['Boolean'];
  name: Scalars['String'];
  /** An array relationship */
  parts: Array<Construct_Part>;
  /** An aggregate relationship */
  parts_aggregate: Construct_Part_Aggregate;
  sequence?: Maybe<Scalars['String']>;
  /** A computed field, executes function "construct_sequence_length" */
  sequence_length?: Maybe<Scalars['Int']>;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user?: Maybe<User>;
};

/** columns and relationships of "construct" */
export type ConstructAnnotationsArgs = {
  distinct_on?: Maybe<Array<Annotation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Annotation_Order_By>>;
  where?: Maybe<Annotation_Bool_Exp>;
};

/** columns and relationships of "construct" */
export type ConstructAnnotations_AggregateArgs = {
  distinct_on?: Maybe<Array<Annotation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Annotation_Order_By>>;
  where?: Maybe<Annotation_Bool_Exp>;
};

/** columns and relationships of "construct" */
export type ConstructPartsArgs = {
  distinct_on?: Maybe<Array<Construct_Part_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Construct_Part_Order_By>>;
  where?: Maybe<Construct_Part_Bool_Exp>;
};

/** columns and relationships of "construct" */
export type ConstructParts_AggregateArgs = {
  distinct_on?: Maybe<Array<Construct_Part_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Construct_Part_Order_By>>;
  where?: Maybe<Construct_Part_Bool_Exp>;
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

/** order by aggregate values of table "construct" */
export type Construct_Aggregate_Order_By = {
  avg?: Maybe<Construct_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Construct_Max_Order_By>;
  min?: Maybe<Construct_Min_Order_By>;
  stddev?: Maybe<Construct_Stddev_Order_By>;
  stddev_pop?: Maybe<Construct_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Construct_Stddev_Samp_Order_By>;
  sum?: Maybe<Construct_Sum_Order_By>;
  var_pop?: Maybe<Construct_Var_Pop_Order_By>;
  var_samp?: Maybe<Construct_Var_Samp_Order_By>;
  variance?: Maybe<Construct_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "construct" */
export type Construct_Arr_Rel_Insert_Input = {
  data: Array<Construct_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Construct_On_Conflict>;
};

/** aggregate avg on columns */
export type Construct_Avg_Fields = {
  __typename?: 'construct_avg_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "construct" */
export type Construct_Avg_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "construct". All fields are combined with a logical 'AND'. */
export type Construct_Bool_Exp = {
  _and?: Maybe<Array<Construct_Bool_Exp>>;
  _not?: Maybe<Construct_Bool_Exp>;
  _or?: Maybe<Array<Construct_Bool_Exp>>;
  annotations?: Maybe<Annotation_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  created_by_id?: Maybe<Int_Comparison_Exp>;
  folder?: Maybe<Folder_Bool_Exp>;
  folder_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  is_template?: Maybe<Boolean_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  parts?: Maybe<Construct_Part_Bool_Exp>;
  sequence?: Maybe<String_Comparison_Exp>;
  sequence_length?: Maybe<Int_Comparison_Exp>;
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
  annotations?: Maybe<Annotation_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['Int']>;
  folder?: Maybe<Folder_Obj_Rel_Insert_Input>;
  folder_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  is_template?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  parts?: Maybe<Construct_Part_Arr_Rel_Insert_Input>;
  sequence?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Construct_Max_Fields = {
  __typename?: 'construct_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['Int']>;
  folder_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  sequence?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "construct" */
export type Construct_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  folder_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  sequence?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Construct_Min_Fields = {
  __typename?: 'construct_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['Int']>;
  folder_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  sequence?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "construct" */
export type Construct_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  folder_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  sequence?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
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
  annotations_aggregate?: Maybe<Annotation_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  folder?: Maybe<Folder_Order_By>;
  folder_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_template?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  parts_aggregate?: Maybe<Construct_Part_Aggregate_Order_By>;
  sequence?: Maybe<Order_By>;
  sequence_length?: Maybe<Order_By>;
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
  part?: Maybe<Part>;
  part_id?: Maybe<Scalars['uuid']>;
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

/** input type for inserting object relation for remote table "construct_part" */
export type Construct_Part_Obj_Rel_Insert_Input = {
  data: Construct_Part_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Construct_Part_On_Conflict>;
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
  FolderId = 'folder_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsTemplate = 'is_template',
  /** column name */
  Name = 'name',
  /** column name */
  Sequence = 'sequence',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "construct" */
export type Construct_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['Int']>;
  folder_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  is_template?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  sequence?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Construct_Stddev_Fields = {
  __typename?: 'construct_stddev_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "construct" */
export type Construct_Stddev_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Construct_Stddev_Pop_Fields = {
  __typename?: 'construct_stddev_pop_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "construct" */
export type Construct_Stddev_Pop_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Construct_Stddev_Samp_Fields = {
  __typename?: 'construct_stddev_samp_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "construct" */
export type Construct_Stddev_Samp_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Construct_Sum_Fields = {
  __typename?: 'construct_sum_fields';
  created_by_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "construct" */
export type Construct_Sum_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** update columns of table "construct" */
export enum Construct_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  FolderId = 'folder_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsTemplate = 'is_template',
  /** column name */
  Name = 'name',
  /** column name */
  Sequence = 'sequence',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Construct_Var_Pop_Fields = {
  __typename?: 'construct_var_pop_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "construct" */
export type Construct_Var_Pop_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Construct_Var_Samp_Fields = {
  __typename?: 'construct_var_samp_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "construct" */
export type Construct_Var_Samp_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Construct_Variance_Fields = {
  __typename?: 'construct_variance_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "construct" */
export type Construct_Variance_Order_By = {
  created_by_id?: Maybe<Order_By>;
};

/** columns and relationships of "folder" */
export type Folder = {
  __typename?: 'folder';
  /** An array relationship */
  constructs: Array<Construct>;
  /** An aggregate relationship */
  constructs_aggregate: Construct_Aggregate;
  created_at: Scalars['timestamptz'];
  created_by_id?: Maybe<Scalars['Int']>;
  description: Scalars['String'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user?: Maybe<User>;
};

/** columns and relationships of "folder" */
export type FolderConstructsArgs = {
  distinct_on?: Maybe<Array<Construct_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Construct_Order_By>>;
  where?: Maybe<Construct_Bool_Exp>;
};

/** columns and relationships of "folder" */
export type FolderConstructs_AggregateArgs = {
  distinct_on?: Maybe<Array<Construct_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Construct_Order_By>>;
  where?: Maybe<Construct_Bool_Exp>;
};

/** aggregated selection of "folder" */
export type Folder_Aggregate = {
  __typename?: 'folder_aggregate';
  aggregate?: Maybe<Folder_Aggregate_Fields>;
  nodes: Array<Folder>;
};

/** aggregate fields of "folder" */
export type Folder_Aggregate_Fields = {
  __typename?: 'folder_aggregate_fields';
  avg?: Maybe<Folder_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Folder_Max_Fields>;
  min?: Maybe<Folder_Min_Fields>;
  stddev?: Maybe<Folder_Stddev_Fields>;
  stddev_pop?: Maybe<Folder_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Folder_Stddev_Samp_Fields>;
  sum?: Maybe<Folder_Sum_Fields>;
  var_pop?: Maybe<Folder_Var_Pop_Fields>;
  var_samp?: Maybe<Folder_Var_Samp_Fields>;
  variance?: Maybe<Folder_Variance_Fields>;
};

/** aggregate fields of "folder" */
export type Folder_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Folder_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Folder_Avg_Fields = {
  __typename?: 'folder_avg_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "folder". All fields are combined with a logical 'AND'. */
export type Folder_Bool_Exp = {
  _and?: Maybe<Array<Folder_Bool_Exp>>;
  _not?: Maybe<Folder_Bool_Exp>;
  _or?: Maybe<Array<Folder_Bool_Exp>>;
  constructs?: Maybe<Construct_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  created_by_id?: Maybe<Int_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
};

/** unique or primary key constraints on table "folder" */
export enum Folder_Constraint {
  /** unique or primary key constraint */
  ProjectPkey = 'project_pkey',
}

/** input type for incrementing numeric columns in table "folder" */
export type Folder_Inc_Input = {
  created_by_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "folder" */
export type Folder_Insert_Input = {
  constructs?: Maybe<Construct_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Folder_Max_Fields = {
  __typename?: 'folder_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Folder_Min_Fields = {
  __typename?: 'folder_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "folder" */
export type Folder_Mutation_Response = {
  __typename?: 'folder_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Folder>;
};

/** input type for inserting object relation for remote table "folder" */
export type Folder_Obj_Rel_Insert_Input = {
  data: Folder_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Folder_On_Conflict>;
};

/** on conflict condition type for table "folder" */
export type Folder_On_Conflict = {
  constraint: Folder_Constraint;
  update_columns?: Array<Folder_Update_Column>;
  where?: Maybe<Folder_Bool_Exp>;
};

/** Ordering options when selecting data from "folder". */
export type Folder_Order_By = {
  constructs_aggregate?: Maybe<Construct_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
};

/** primary key columns input for table: folder */
export type Folder_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "folder" */
export enum Folder_Select_Column {
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

/** input type for updating data in table "folder" */
export type Folder_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Folder_Stddev_Fields = {
  __typename?: 'folder_stddev_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Folder_Stddev_Pop_Fields = {
  __typename?: 'folder_stddev_pop_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Folder_Stddev_Samp_Fields = {
  __typename?: 'folder_stddev_samp_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Folder_Sum_Fields = {
  __typename?: 'folder_sum_fields';
  created_by_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "folder" */
export enum Folder_Update_Column {
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
export type Folder_Var_Pop_Fields = {
  __typename?: 'folder_var_pop_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Folder_Var_Samp_Fields = {
  __typename?: 'folder_var_samp_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Folder_Variance_Fields = {
  __typename?: 'folder_variance_fields';
  created_by_id?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "annotation" */
  delete_annotation?: Maybe<Annotation_Mutation_Response>;
  /** delete single row from the table: "annotation" */
  delete_annotation_by_pk?: Maybe<Annotation>;
  /** delete data from the table: "chassis" */
  delete_chassis?: Maybe<Chassis_Mutation_Response>;
  /** delete single row from the table: "chassis" */
  delete_chassis_by_pk?: Maybe<Chassis>;
  /** delete data from the table: "chassis_organization" */
  delete_chassis_organization?: Maybe<Chassis_Organization_Mutation_Response>;
  /** delete single row from the table: "chassis_organization" */
  delete_chassis_organization_by_pk?: Maybe<Chassis_Organization>;
  /** delete data from the table: "construct" */
  delete_construct?: Maybe<Construct_Mutation_Response>;
  /** delete single row from the table: "construct" */
  delete_construct_by_pk?: Maybe<Construct>;
  /** delete data from the table: "construct_part" */
  delete_construct_part?: Maybe<Construct_Part_Mutation_Response>;
  /** delete single row from the table: "construct_part" */
  delete_construct_part_by_pk?: Maybe<Construct_Part>;
  /** delete data from the table: "folder" */
  delete_folder?: Maybe<Folder_Mutation_Response>;
  /** delete single row from the table: "folder" */
  delete_folder_by_pk?: Maybe<Folder>;
  /** delete data from the table: "organization" */
  delete_organization?: Maybe<Organization_Mutation_Response>;
  /** delete single row from the table: "organization" */
  delete_organization_by_pk?: Maybe<Organization>;
  /** delete data from the table: "part" */
  delete_part?: Maybe<Part_Mutation_Response>;
  /** delete single row from the table: "part" */
  delete_part_by_pk?: Maybe<Part>;
  /** delete data from the table: "part_relation" */
  delete_part_relation?: Maybe<Part_Relation_Mutation_Response>;
  /** delete single row from the table: "part_relation" */
  delete_part_relation_by_pk?: Maybe<Part_Relation>;
  /** delete data from the table: "part_type" */
  delete_part_type?: Maybe<Part_Type_Mutation_Response>;
  /** delete single row from the table: "part_type" */
  delete_part_type_by_pk?: Maybe<Part_Type>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** insert data into the table: "annotation" */
  insert_annotation?: Maybe<Annotation_Mutation_Response>;
  /** insert a single row into the table: "annotation" */
  insert_annotation_one?: Maybe<Annotation>;
  /** insert data into the table: "chassis" */
  insert_chassis?: Maybe<Chassis_Mutation_Response>;
  /** insert a single row into the table: "chassis" */
  insert_chassis_one?: Maybe<Chassis>;
  /** insert data into the table: "chassis_organization" */
  insert_chassis_organization?: Maybe<Chassis_Organization_Mutation_Response>;
  /** insert a single row into the table: "chassis_organization" */
  insert_chassis_organization_one?: Maybe<Chassis_Organization>;
  /** insert data into the table: "construct" */
  insert_construct?: Maybe<Construct_Mutation_Response>;
  /** insert a single row into the table: "construct" */
  insert_construct_one?: Maybe<Construct>;
  /** insert data into the table: "construct_part" */
  insert_construct_part?: Maybe<Construct_Part_Mutation_Response>;
  /** insert a single row into the table: "construct_part" */
  insert_construct_part_one?: Maybe<Construct_Part>;
  /** insert data into the table: "folder" */
  insert_folder?: Maybe<Folder_Mutation_Response>;
  /** insert a single row into the table: "folder" */
  insert_folder_one?: Maybe<Folder>;
  /** insert data into the table: "organization" */
  insert_organization?: Maybe<Organization_Mutation_Response>;
  /** insert a single row into the table: "organization" */
  insert_organization_one?: Maybe<Organization>;
  /** insert data into the table: "part" */
  insert_part?: Maybe<Part_Mutation_Response>;
  /** insert a single row into the table: "part" */
  insert_part_one?: Maybe<Part>;
  /** insert data into the table: "part_relation" */
  insert_part_relation?: Maybe<Part_Relation_Mutation_Response>;
  /** insert a single row into the table: "part_relation" */
  insert_part_relation_one?: Maybe<Part_Relation>;
  /** insert data into the table: "part_type" */
  insert_part_type?: Maybe<Part_Type_Mutation_Response>;
  /** insert a single row into the table: "part_type" */
  insert_part_type_one?: Maybe<Part_Type>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** update data of the table: "annotation" */
  update_annotation?: Maybe<Annotation_Mutation_Response>;
  /** update single row of the table: "annotation" */
  update_annotation_by_pk?: Maybe<Annotation>;
  /** update data of the table: "chassis" */
  update_chassis?: Maybe<Chassis_Mutation_Response>;
  /** update single row of the table: "chassis" */
  update_chassis_by_pk?: Maybe<Chassis>;
  /** update data of the table: "chassis_organization" */
  update_chassis_organization?: Maybe<Chassis_Organization_Mutation_Response>;
  /** update single row of the table: "chassis_organization" */
  update_chassis_organization_by_pk?: Maybe<Chassis_Organization>;
  /** update data of the table: "construct" */
  update_construct?: Maybe<Construct_Mutation_Response>;
  /** update single row of the table: "construct" */
  update_construct_by_pk?: Maybe<Construct>;
  /** update data of the table: "construct_part" */
  update_construct_part?: Maybe<Construct_Part_Mutation_Response>;
  /** update single row of the table: "construct_part" */
  update_construct_part_by_pk?: Maybe<Construct_Part>;
  /** update data of the table: "folder" */
  update_folder?: Maybe<Folder_Mutation_Response>;
  /** update single row of the table: "folder" */
  update_folder_by_pk?: Maybe<Folder>;
  /** update data of the table: "organization" */
  update_organization?: Maybe<Organization_Mutation_Response>;
  /** update single row of the table: "organization" */
  update_organization_by_pk?: Maybe<Organization>;
  /** update data of the table: "part" */
  update_part?: Maybe<Part_Mutation_Response>;
  /** update single row of the table: "part" */
  update_part_by_pk?: Maybe<Part>;
  /** update data of the table: "part_relation" */
  update_part_relation?: Maybe<Part_Relation_Mutation_Response>;
  /** update single row of the table: "part_relation" */
  update_part_relation_by_pk?: Maybe<Part_Relation>;
  /** update data of the table: "part_type" */
  update_part_type?: Maybe<Part_Type_Mutation_Response>;
  /** update single row of the table: "part_type" */
  update_part_type_by_pk?: Maybe<Part_Type>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
};

/** mutation root */
export type Mutation_RootDelete_AnnotationArgs = {
  where: Annotation_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Annotation_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_ChassisArgs = {
  where: Chassis_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Chassis_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_Chassis_OrganizationArgs = {
  where: Chassis_Organization_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Chassis_Organization_By_PkArgs = {
  id: Scalars['Int'];
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
export type Mutation_RootDelete_FolderArgs = {
  where: Folder_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Folder_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_OrganizationArgs = {
  where: Organization_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Organization_By_PkArgs = {
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
export type Mutation_RootDelete_Part_RelationArgs = {
  where: Part_Relation_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Part_Relation_By_PkArgs = {
  id: Scalars['Int'];
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
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['Int'];
  username: Scalars['String'];
};

/** mutation root */
export type Mutation_RootInsert_AnnotationArgs = {
  objects: Array<Annotation_Insert_Input>;
  on_conflict?: Maybe<Annotation_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Annotation_OneArgs = {
  object: Annotation_Insert_Input;
  on_conflict?: Maybe<Annotation_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ChassisArgs = {
  objects: Array<Chassis_Insert_Input>;
  on_conflict?: Maybe<Chassis_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Chassis_OneArgs = {
  object: Chassis_Insert_Input;
  on_conflict?: Maybe<Chassis_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Chassis_OrganizationArgs = {
  objects: Array<Chassis_Organization_Insert_Input>;
  on_conflict?: Maybe<Chassis_Organization_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Chassis_Organization_OneArgs = {
  object: Chassis_Organization_Insert_Input;
  on_conflict?: Maybe<Chassis_Organization_On_Conflict>;
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
export type Mutation_RootInsert_FolderArgs = {
  objects: Array<Folder_Insert_Input>;
  on_conflict?: Maybe<Folder_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Folder_OneArgs = {
  object: Folder_Insert_Input;
  on_conflict?: Maybe<Folder_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_OrganizationArgs = {
  objects: Array<Organization_Insert_Input>;
  on_conflict?: Maybe<Organization_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Organization_OneArgs = {
  object: Organization_Insert_Input;
  on_conflict?: Maybe<Organization_On_Conflict>;
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
export type Mutation_RootInsert_Part_RelationArgs = {
  objects: Array<Part_Relation_Insert_Input>;
  on_conflict?: Maybe<Part_Relation_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Part_Relation_OneArgs = {
  object: Part_Relation_Insert_Input;
  on_conflict?: Maybe<Part_Relation_On_Conflict>;
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
export type Mutation_RootUpdate_AnnotationArgs = {
  _inc?: Maybe<Annotation_Inc_Input>;
  _set?: Maybe<Annotation_Set_Input>;
  where: Annotation_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Annotation_By_PkArgs = {
  _inc?: Maybe<Annotation_Inc_Input>;
  _set?: Maybe<Annotation_Set_Input>;
  pk_columns: Annotation_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_ChassisArgs = {
  _inc?: Maybe<Chassis_Inc_Input>;
  _set?: Maybe<Chassis_Set_Input>;
  where: Chassis_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Chassis_By_PkArgs = {
  _inc?: Maybe<Chassis_Inc_Input>;
  _set?: Maybe<Chassis_Set_Input>;
  pk_columns: Chassis_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Chassis_OrganizationArgs = {
  _inc?: Maybe<Chassis_Organization_Inc_Input>;
  _set?: Maybe<Chassis_Organization_Set_Input>;
  where: Chassis_Organization_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Chassis_Organization_By_PkArgs = {
  _inc?: Maybe<Chassis_Organization_Inc_Input>;
  _set?: Maybe<Chassis_Organization_Set_Input>;
  pk_columns: Chassis_Organization_Pk_Columns_Input;
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
export type Mutation_RootUpdate_FolderArgs = {
  _inc?: Maybe<Folder_Inc_Input>;
  _set?: Maybe<Folder_Set_Input>;
  where: Folder_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Folder_By_PkArgs = {
  _inc?: Maybe<Folder_Inc_Input>;
  _set?: Maybe<Folder_Set_Input>;
  pk_columns: Folder_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_OrganizationArgs = {
  _inc?: Maybe<Organization_Inc_Input>;
  _set?: Maybe<Organization_Set_Input>;
  where: Organization_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Organization_By_PkArgs = {
  _inc?: Maybe<Organization_Inc_Input>;
  _set?: Maybe<Organization_Set_Input>;
  pk_columns: Organization_Pk_Columns_Input;
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
export type Mutation_RootUpdate_Part_RelationArgs = {
  _inc?: Maybe<Part_Relation_Inc_Input>;
  _set?: Maybe<Part_Relation_Set_Input>;
  where: Part_Relation_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Part_Relation_By_PkArgs = {
  _inc?: Maybe<Part_Relation_Inc_Input>;
  _set?: Maybe<Part_Relation_Set_Input>;
  pk_columns: Part_Relation_Pk_Columns_Input;
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
  DescNullsLast = 'desc_nulls_last',
}

/** columns and relationships of "organization" */
export type Organization = {
  __typename?: 'organization';
  /** An array relationship */
  chassis: Array<Chassis_Organization>;
  /** An aggregate relationship */
  chassis_aggregate: Chassis_Organization_Aggregate;
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  logo_url?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
  /** An array relationship */
  users: Array<User>;
  /** An aggregate relationship */
  users_aggregate: User_Aggregate;
};

/** columns and relationships of "organization" */
export type OrganizationChassisArgs = {
  distinct_on?: Maybe<Array<Chassis_Organization_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chassis_Organization_Order_By>>;
  where?: Maybe<Chassis_Organization_Bool_Exp>;
};

/** columns and relationships of "organization" */
export type OrganizationChassis_AggregateArgs = {
  distinct_on?: Maybe<Array<Chassis_Organization_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chassis_Organization_Order_By>>;
  where?: Maybe<Chassis_Organization_Bool_Exp>;
};

/** columns and relationships of "organization" */
export type OrganizationUsersArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** columns and relationships of "organization" */
export type OrganizationUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** aggregated selection of "organization" */
export type Organization_Aggregate = {
  __typename?: 'organization_aggregate';
  aggregate?: Maybe<Organization_Aggregate_Fields>;
  nodes: Array<Organization>;
};

/** aggregate fields of "organization" */
export type Organization_Aggregate_Fields = {
  __typename?: 'organization_aggregate_fields';
  avg?: Maybe<Organization_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Organization_Max_Fields>;
  min?: Maybe<Organization_Min_Fields>;
  stddev?: Maybe<Organization_Stddev_Fields>;
  stddev_pop?: Maybe<Organization_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Organization_Stddev_Samp_Fields>;
  sum?: Maybe<Organization_Sum_Fields>;
  var_pop?: Maybe<Organization_Var_Pop_Fields>;
  var_samp?: Maybe<Organization_Var_Samp_Fields>;
  variance?: Maybe<Organization_Variance_Fields>;
};

/** aggregate fields of "organization" */
export type Organization_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Organization_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Organization_Avg_Fields = {
  __typename?: 'organization_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "organization". All fields are combined with a logical 'AND'. */
export type Organization_Bool_Exp = {
  _and?: Maybe<Array<Organization_Bool_Exp>>;
  _not?: Maybe<Organization_Bool_Exp>;
  _or?: Maybe<Array<Organization_Bool_Exp>>;
  chassis?: Maybe<Chassis_Organization_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  logo_url?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  users?: Maybe<User_Bool_Exp>;
};

/** unique or primary key constraints on table "organization" */
export enum Organization_Constraint {
  /** unique or primary key constraint */
  OrganizationPkey = 'organization_pkey',
}

/** input type for incrementing numeric columns in table "organization" */
export type Organization_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "organization" */
export type Organization_Insert_Input = {
  chassis?: Maybe<Chassis_Organization_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  logo_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  users?: Maybe<User_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Organization_Max_Fields = {
  __typename?: 'organization_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  logo_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Organization_Min_Fields = {
  __typename?: 'organization_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  logo_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "organization" */
export type Organization_Mutation_Response = {
  __typename?: 'organization_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Organization>;
};

/** input type for inserting object relation for remote table "organization" */
export type Organization_Obj_Rel_Insert_Input = {
  data: Organization_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Organization_On_Conflict>;
};

/** on conflict condition type for table "organization" */
export type Organization_On_Conflict = {
  constraint: Organization_Constraint;
  update_columns?: Array<Organization_Update_Column>;
  where?: Maybe<Organization_Bool_Exp>;
};

/** Ordering options when selecting data from "organization". */
export type Organization_Order_By = {
  chassis_aggregate?: Maybe<Chassis_Organization_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logo_url?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  users_aggregate?: Maybe<User_Aggregate_Order_By>;
};

/** primary key columns input for table: organization */
export type Organization_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "organization" */
export enum Organization_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LogoUrl = 'logo_url',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "organization" */
export type Organization_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  logo_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Organization_Stddev_Fields = {
  __typename?: 'organization_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Organization_Stddev_Pop_Fields = {
  __typename?: 'organization_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Organization_Stddev_Samp_Fields = {
  __typename?: 'organization_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Organization_Sum_Fields = {
  __typename?: 'organization_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "organization" */
export enum Organization_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LogoUrl = 'logo_url',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Organization_Var_Pop_Fields = {
  __typename?: 'organization_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Organization_Var_Samp_Fields = {
  __typename?: 'organization_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Organization_Variance_Fields = {
  __typename?: 'organization_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "part" */
export type Part = {
  __typename?: 'part';
  alias?: Maybe<Scalars['String']>;
  /** An array relationship */
  annotations: Array<Annotation>;
  /** An aggregate relationship */
  annotations_aggregate: Annotation_Aggregate;
  /** An object relationship */
  chassis?: Maybe<Chassis>;
  chassis_id?: Maybe<Scalars['Int']>;
  /** An array relationship */
  child_relations: Array<Part_Relation>;
  /** An aggregate relationship */
  child_relations_aggregate: Part_Relation_Aggregate;
  /** An array relationship */
  constructs: Array<Construct_Part>;
  /** An aggregate relationship */
  constructs_aggregate: Construct_Part_Aggregate;
  created_at: Scalars['timestamptz'];
  created_by_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  parent_relations: Array<Part_Relation>;
  /** An aggregate relationship */
  parent_relations_aggregate: Part_Relation_Aggregate;
  part_type_id?: Maybe<Scalars['Int']>;
  sequence?: Maybe<Scalars['String']>;
  /** A computed field, executes function "sequence_length" */
  sequence_length?: Maybe<Scalars['Int']>;
  /** An object relationship */
  type?: Maybe<Part_Type>;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user?: Maybe<User>;
};

/** columns and relationships of "part" */
export type PartAnnotationsArgs = {
  distinct_on?: Maybe<Array<Annotation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Annotation_Order_By>>;
  where?: Maybe<Annotation_Bool_Exp>;
};

/** columns and relationships of "part" */
export type PartAnnotations_AggregateArgs = {
  distinct_on?: Maybe<Array<Annotation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Annotation_Order_By>>;
  where?: Maybe<Annotation_Bool_Exp>;
};

/** columns and relationships of "part" */
export type PartChild_RelationsArgs = {
  distinct_on?: Maybe<Array<Part_Relation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Part_Relation_Order_By>>;
  where?: Maybe<Part_Relation_Bool_Exp>;
};

/** columns and relationships of "part" */
export type PartChild_Relations_AggregateArgs = {
  distinct_on?: Maybe<Array<Part_Relation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Part_Relation_Order_By>>;
  where?: Maybe<Part_Relation_Bool_Exp>;
};

/** columns and relationships of "part" */
export type PartConstructsArgs = {
  distinct_on?: Maybe<Array<Construct_Part_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Construct_Part_Order_By>>;
  where?: Maybe<Construct_Part_Bool_Exp>;
};

/** columns and relationships of "part" */
export type PartConstructs_AggregateArgs = {
  distinct_on?: Maybe<Array<Construct_Part_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Construct_Part_Order_By>>;
  where?: Maybe<Construct_Part_Bool_Exp>;
};

/** columns and relationships of "part" */
export type PartParent_RelationsArgs = {
  distinct_on?: Maybe<Array<Part_Relation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Part_Relation_Order_By>>;
  where?: Maybe<Part_Relation_Bool_Exp>;
};

/** columns and relationships of "part" */
export type PartParent_Relations_AggregateArgs = {
  distinct_on?: Maybe<Array<Part_Relation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Part_Relation_Order_By>>;
  where?: Maybe<Part_Relation_Bool_Exp>;
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

/** order by aggregate values of table "part" */
export type Part_Aggregate_Order_By = {
  avg?: Maybe<Part_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Part_Max_Order_By>;
  min?: Maybe<Part_Min_Order_By>;
  stddev?: Maybe<Part_Stddev_Order_By>;
  stddev_pop?: Maybe<Part_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Part_Stddev_Samp_Order_By>;
  sum?: Maybe<Part_Sum_Order_By>;
  var_pop?: Maybe<Part_Var_Pop_Order_By>;
  var_samp?: Maybe<Part_Var_Samp_Order_By>;
  variance?: Maybe<Part_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "part" */
export type Part_Arr_Rel_Insert_Input = {
  data: Array<Part_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Part_On_Conflict>;
};

/** aggregate avg on columns */
export type Part_Avg_Fields = {
  __typename?: 'part_avg_fields';
  chassis_id?: Maybe<Scalars['Float']>;
  created_by_id?: Maybe<Scalars['Float']>;
  part_type_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "part" */
export type Part_Avg_Order_By = {
  chassis_id?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  part_type_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "part". All fields are combined with a logical 'AND'. */
export type Part_Bool_Exp = {
  _and?: Maybe<Array<Part_Bool_Exp>>;
  _not?: Maybe<Part_Bool_Exp>;
  _or?: Maybe<Array<Part_Bool_Exp>>;
  alias?: Maybe<String_Comparison_Exp>;
  annotations?: Maybe<Annotation_Bool_Exp>;
  chassis?: Maybe<Chassis_Bool_Exp>;
  chassis_id?: Maybe<Int_Comparison_Exp>;
  child_relations?: Maybe<Part_Relation_Bool_Exp>;
  constructs?: Maybe<Construct_Part_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  created_by_id?: Maybe<Int_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  parent_relations?: Maybe<Part_Relation_Bool_Exp>;
  part_type_id?: Maybe<Int_Comparison_Exp>;
  sequence?: Maybe<String_Comparison_Exp>;
  sequence_length?: Maybe<Int_Comparison_Exp>;
  type?: Maybe<Part_Type_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
};

/** unique or primary key constraints on table "part" */
export enum Part_Constraint {
  /** unique or primary key constraint */
  PartPkey = 'part_pkey',
  /** unique or primary key constraint */
  PartSequenceKey = 'part_sequence_key',
}

/** input type for incrementing numeric columns in table "part" */
export type Part_Inc_Input = {
  chassis_id?: Maybe<Scalars['Int']>;
  created_by_id?: Maybe<Scalars['Int']>;
  part_type_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "part" */
export type Part_Insert_Input = {
  alias?: Maybe<Scalars['String']>;
  annotations?: Maybe<Annotation_Arr_Rel_Insert_Input>;
  chassis?: Maybe<Chassis_Obj_Rel_Insert_Input>;
  chassis_id?: Maybe<Scalars['Int']>;
  child_relations?: Maybe<Part_Relation_Arr_Rel_Insert_Input>;
  constructs?: Maybe<Construct_Part_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  parent_relations?: Maybe<Part_Relation_Arr_Rel_Insert_Input>;
  part_type_id?: Maybe<Scalars['Int']>;
  sequence?: Maybe<Scalars['String']>;
  type?: Maybe<Part_Type_Obj_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Part_Max_Fields = {
  __typename?: 'part_max_fields';
  alias?: Maybe<Scalars['String']>;
  chassis_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  part_type_id?: Maybe<Scalars['Int']>;
  sequence?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "part" */
export type Part_Max_Order_By = {
  alias?: Maybe<Order_By>;
  chassis_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  part_type_id?: Maybe<Order_By>;
  sequence?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Part_Min_Fields = {
  __typename?: 'part_min_fields';
  alias?: Maybe<Scalars['String']>;
  chassis_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  part_type_id?: Maybe<Scalars['Int']>;
  sequence?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "part" */
export type Part_Min_Order_By = {
  alias?: Maybe<Order_By>;
  chassis_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  part_type_id?: Maybe<Order_By>;
  sequence?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
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
  annotations_aggregate?: Maybe<Annotation_Aggregate_Order_By>;
  chassis?: Maybe<Chassis_Order_By>;
  chassis_id?: Maybe<Order_By>;
  child_relations_aggregate?: Maybe<Part_Relation_Aggregate_Order_By>;
  constructs_aggregate?: Maybe<Construct_Part_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  parent_relations_aggregate?: Maybe<Part_Relation_Aggregate_Order_By>;
  part_type_id?: Maybe<Order_By>;
  sequence?: Maybe<Order_By>;
  sequence_length?: Maybe<Order_By>;
  type?: Maybe<Part_Type_Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
};

/** primary key columns input for table: part */
export type Part_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** columns and relationships of "part_relation" */
export type Part_Relation = {
  __typename?: 'part_relation';
  /** An object relationship */
  child_part: Part;
  child_part_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  created_by_id: Scalars['Int'];
  id: Scalars['Int'];
  /** An object relationship */
  parent_part: Part;
  parent_part_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user?: Maybe<User>;
};

/** aggregated selection of "part_relation" */
export type Part_Relation_Aggregate = {
  __typename?: 'part_relation_aggregate';
  aggregate?: Maybe<Part_Relation_Aggregate_Fields>;
  nodes: Array<Part_Relation>;
};

/** aggregate fields of "part_relation" */
export type Part_Relation_Aggregate_Fields = {
  __typename?: 'part_relation_aggregate_fields';
  avg?: Maybe<Part_Relation_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Part_Relation_Max_Fields>;
  min?: Maybe<Part_Relation_Min_Fields>;
  stddev?: Maybe<Part_Relation_Stddev_Fields>;
  stddev_pop?: Maybe<Part_Relation_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Part_Relation_Stddev_Samp_Fields>;
  sum?: Maybe<Part_Relation_Sum_Fields>;
  var_pop?: Maybe<Part_Relation_Var_Pop_Fields>;
  var_samp?: Maybe<Part_Relation_Var_Samp_Fields>;
  variance?: Maybe<Part_Relation_Variance_Fields>;
};

/** aggregate fields of "part_relation" */
export type Part_Relation_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Part_Relation_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "part_relation" */
export type Part_Relation_Aggregate_Order_By = {
  avg?: Maybe<Part_Relation_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Part_Relation_Max_Order_By>;
  min?: Maybe<Part_Relation_Min_Order_By>;
  stddev?: Maybe<Part_Relation_Stddev_Order_By>;
  stddev_pop?: Maybe<Part_Relation_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Part_Relation_Stddev_Samp_Order_By>;
  sum?: Maybe<Part_Relation_Sum_Order_By>;
  var_pop?: Maybe<Part_Relation_Var_Pop_Order_By>;
  var_samp?: Maybe<Part_Relation_Var_Samp_Order_By>;
  variance?: Maybe<Part_Relation_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "part_relation" */
export type Part_Relation_Arr_Rel_Insert_Input = {
  data: Array<Part_Relation_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Part_Relation_On_Conflict>;
};

/** aggregate avg on columns */
export type Part_Relation_Avg_Fields = {
  __typename?: 'part_relation_avg_fields';
  created_by_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "part_relation" */
export type Part_Relation_Avg_Order_By = {
  created_by_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "part_relation". All fields are combined with a logical 'AND'. */
export type Part_Relation_Bool_Exp = {
  _and?: Maybe<Array<Part_Relation_Bool_Exp>>;
  _not?: Maybe<Part_Relation_Bool_Exp>;
  _or?: Maybe<Array<Part_Relation_Bool_Exp>>;
  child_part?: Maybe<Part_Bool_Exp>;
  child_part_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  created_by_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  parent_part?: Maybe<Part_Bool_Exp>;
  parent_part_id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
};

/** unique or primary key constraints on table "part_relation" */
export enum Part_Relation_Constraint {
  /** unique or primary key constraint */
  PartRelationPkey = 'part_relation_pkey',
}

/** input type for incrementing numeric columns in table "part_relation" */
export type Part_Relation_Inc_Input = {
  created_by_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "part_relation" */
export type Part_Relation_Insert_Input = {
  child_part?: Maybe<Part_Obj_Rel_Insert_Input>;
  child_part_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  parent_part?: Maybe<Part_Obj_Rel_Insert_Input>;
  parent_part_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Part_Relation_Max_Fields = {
  __typename?: 'part_relation_max_fields';
  child_part_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  parent_part_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "part_relation" */
export type Part_Relation_Max_Order_By = {
  child_part_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  parent_part_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Part_Relation_Min_Fields = {
  __typename?: 'part_relation_min_fields';
  child_part_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  parent_part_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "part_relation" */
export type Part_Relation_Min_Order_By = {
  child_part_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  parent_part_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "part_relation" */
export type Part_Relation_Mutation_Response = {
  __typename?: 'part_relation_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Part_Relation>;
};

/** on conflict condition type for table "part_relation" */
export type Part_Relation_On_Conflict = {
  constraint: Part_Relation_Constraint;
  update_columns?: Array<Part_Relation_Update_Column>;
  where?: Maybe<Part_Relation_Bool_Exp>;
};

/** Ordering options when selecting data from "part_relation". */
export type Part_Relation_Order_By = {
  child_part?: Maybe<Part_Order_By>;
  child_part_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  parent_part?: Maybe<Part_Order_By>;
  parent_part_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
};

/** primary key columns input for table: part_relation */
export type Part_Relation_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "part_relation" */
export enum Part_Relation_Select_Column {
  /** column name */
  ChildPartId = 'child_part_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  Id = 'id',
  /** column name */
  ParentPartId = 'parent_part_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "part_relation" */
export type Part_Relation_Set_Input = {
  child_part_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  parent_part_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Part_Relation_Stddev_Fields = {
  __typename?: 'part_relation_stddev_fields';
  created_by_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "part_relation" */
export type Part_Relation_Stddev_Order_By = {
  created_by_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Part_Relation_Stddev_Pop_Fields = {
  __typename?: 'part_relation_stddev_pop_fields';
  created_by_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "part_relation" */
export type Part_Relation_Stddev_Pop_Order_By = {
  created_by_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Part_Relation_Stddev_Samp_Fields = {
  __typename?: 'part_relation_stddev_samp_fields';
  created_by_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "part_relation" */
export type Part_Relation_Stddev_Samp_Order_By = {
  created_by_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Part_Relation_Sum_Fields = {
  __typename?: 'part_relation_sum_fields';
  created_by_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "part_relation" */
export type Part_Relation_Sum_Order_By = {
  created_by_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "part_relation" */
export enum Part_Relation_Update_Column {
  /** column name */
  ChildPartId = 'child_part_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  Id = 'id',
  /** column name */
  ParentPartId = 'parent_part_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Part_Relation_Var_Pop_Fields = {
  __typename?: 'part_relation_var_pop_fields';
  created_by_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "part_relation" */
export type Part_Relation_Var_Pop_Order_By = {
  created_by_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Part_Relation_Var_Samp_Fields = {
  __typename?: 'part_relation_var_samp_fields';
  created_by_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "part_relation" */
export type Part_Relation_Var_Samp_Order_By = {
  created_by_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Part_Relation_Variance_Fields = {
  __typename?: 'part_relation_variance_fields';
  created_by_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "part_relation" */
export type Part_Relation_Variance_Order_By = {
  created_by_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** select columns of table "part" */
export enum Part_Select_Column {
  /** column name */
  Alias = 'alias',
  /** column name */
  ChassisId = 'chassis_id',
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
  chassis_id?: Maybe<Scalars['Int']>;
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
  chassis_id?: Maybe<Scalars['Float']>;
  created_by_id?: Maybe<Scalars['Float']>;
  part_type_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "part" */
export type Part_Stddev_Order_By = {
  chassis_id?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  part_type_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Part_Stddev_Pop_Fields = {
  __typename?: 'part_stddev_pop_fields';
  chassis_id?: Maybe<Scalars['Float']>;
  created_by_id?: Maybe<Scalars['Float']>;
  part_type_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "part" */
export type Part_Stddev_Pop_Order_By = {
  chassis_id?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  part_type_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Part_Stddev_Samp_Fields = {
  __typename?: 'part_stddev_samp_fields';
  chassis_id?: Maybe<Scalars['Float']>;
  created_by_id?: Maybe<Scalars['Float']>;
  part_type_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "part" */
export type Part_Stddev_Samp_Order_By = {
  chassis_id?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  part_type_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Part_Sum_Fields = {
  __typename?: 'part_sum_fields';
  chassis_id?: Maybe<Scalars['Int']>;
  created_by_id?: Maybe<Scalars['Int']>;
  part_type_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "part" */
export type Part_Sum_Order_By = {
  chassis_id?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  part_type_id?: Maybe<Order_By>;
};

/** columns and relationships of "part_type" */
export type Part_Type = {
  __typename?: 'part_type';
  color?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  glyph?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  parts: Array<Part>;
  /** An aggregate relationship */
  parts_aggregate: Part_Aggregate;
  /** A computed field, executes function "slugify_name" */
  slug?: Maybe<Scalars['String']>;
};

/** columns and relationships of "part_type" */
export type Part_TypePartsArgs = {
  distinct_on?: Maybe<Array<Part_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Part_Order_By>>;
  where?: Maybe<Part_Bool_Exp>;
};

/** columns and relationships of "part_type" */
export type Part_TypeParts_AggregateArgs = {
  distinct_on?: Maybe<Array<Part_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Part_Order_By>>;
  where?: Maybe<Part_Bool_Exp>;
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
  color?: Maybe<String_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  glyph?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  parts?: Maybe<Part_Bool_Exp>;
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
  color?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  glyph?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  parts?: Maybe<Part_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Part_Type_Max_Fields = {
  __typename?: 'part_type_max_fields';
  color?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  glyph?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Part_Type_Min_Fields = {
  __typename?: 'part_type_min_fields';
  color?: Maybe<Scalars['String']>;
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
  color?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  glyph?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  parts_aggregate?: Maybe<Part_Aggregate_Order_By>;
  slug?: Maybe<Order_By>;
};

/** primary key columns input for table: part_type */
export type Part_Type_Pk_Columns_Input = {
  name: Scalars['String'];
};

/** select columns of table "part_type" */
export enum Part_Type_Select_Column {
  /** column name */
  Color = 'color',
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
  color?: Maybe<Scalars['String']>;
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
  Color = 'color',
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
  ChassisId = 'chassis_id',
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
  chassis_id?: Maybe<Scalars['Float']>;
  created_by_id?: Maybe<Scalars['Float']>;
  part_type_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "part" */
export type Part_Var_Pop_Order_By = {
  chassis_id?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  part_type_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Part_Var_Samp_Fields = {
  __typename?: 'part_var_samp_fields';
  chassis_id?: Maybe<Scalars['Float']>;
  created_by_id?: Maybe<Scalars['Float']>;
  part_type_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "part" */
export type Part_Var_Samp_Order_By = {
  chassis_id?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  part_type_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Part_Variance_Fields = {
  __typename?: 'part_variance_fields';
  chassis_id?: Maybe<Scalars['Float']>;
  created_by_id?: Maybe<Scalars['Float']>;
  part_type_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "part" */
export type Part_Variance_Order_By = {
  chassis_id?: Maybe<Order_By>;
  created_by_id?: Maybe<Order_By>;
  part_type_id?: Maybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "annotation" */
  annotation: Array<Annotation>;
  /** fetch aggregated fields from the table: "annotation" */
  annotation_aggregate: Annotation_Aggregate;
  /** fetch data from the table: "annotation" using primary key columns */
  annotation_by_pk?: Maybe<Annotation>;
  /** fetch data from the table: "chassis" */
  chassis: Array<Chassis>;
  /** fetch aggregated fields from the table: "chassis" */
  chassis_aggregate: Chassis_Aggregate;
  /** fetch data from the table: "chassis" using primary key columns */
  chassis_by_pk?: Maybe<Chassis>;
  /** fetch data from the table: "chassis_organization" */
  chassis_organization: Array<Chassis_Organization>;
  /** fetch aggregated fields from the table: "chassis_organization" */
  chassis_organization_aggregate: Chassis_Organization_Aggregate;
  /** fetch data from the table: "chassis_organization" using primary key columns */
  chassis_organization_by_pk?: Maybe<Chassis_Organization>;
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
  /** fetch data from the table: "folder" */
  folder: Array<Folder>;
  /** fetch aggregated fields from the table: "folder" */
  folder_aggregate: Folder_Aggregate;
  /** fetch data from the table: "folder" using primary key columns */
  folder_by_pk?: Maybe<Folder>;
  /** fetch data from the table: "organization" */
  organization: Array<Organization>;
  /** fetch aggregated fields from the table: "organization" */
  organization_aggregate: Organization_Aggregate;
  /** fetch data from the table: "organization" using primary key columns */
  organization_by_pk?: Maybe<Organization>;
  /** fetch data from the table: "part" */
  part: Array<Part>;
  /** fetch aggregated fields from the table: "part" */
  part_aggregate: Part_Aggregate;
  /** fetch data from the table: "part" using primary key columns */
  part_by_pk?: Maybe<Part>;
  /** fetch data from the table: "part_relation" */
  part_relation: Array<Part_Relation>;
  /** fetch aggregated fields from the table: "part_relation" */
  part_relation_aggregate: Part_Relation_Aggregate;
  /** fetch data from the table: "part_relation" using primary key columns */
  part_relation_by_pk?: Maybe<Part_Relation>;
  /** fetch data from the table: "part_type" */
  part_type: Array<Part_Type>;
  /** fetch aggregated fields from the table: "part_type" */
  part_type_aggregate: Part_Type_Aggregate;
  /** fetch data from the table: "part_type" using primary key columns */
  part_type_by_pk?: Maybe<Part_Type>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};

export type Query_RootAnnotationArgs = {
  distinct_on?: Maybe<Array<Annotation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Annotation_Order_By>>;
  where?: Maybe<Annotation_Bool_Exp>;
};

export type Query_RootAnnotation_AggregateArgs = {
  distinct_on?: Maybe<Array<Annotation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Annotation_Order_By>>;
  where?: Maybe<Annotation_Bool_Exp>;
};

export type Query_RootAnnotation_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Query_RootChassisArgs = {
  distinct_on?: Maybe<Array<Chassis_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chassis_Order_By>>;
  where?: Maybe<Chassis_Bool_Exp>;
};

export type Query_RootChassis_AggregateArgs = {
  distinct_on?: Maybe<Array<Chassis_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chassis_Order_By>>;
  where?: Maybe<Chassis_Bool_Exp>;
};

export type Query_RootChassis_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootChassis_OrganizationArgs = {
  distinct_on?: Maybe<Array<Chassis_Organization_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chassis_Organization_Order_By>>;
  where?: Maybe<Chassis_Organization_Bool_Exp>;
};

export type Query_RootChassis_Organization_AggregateArgs = {
  distinct_on?: Maybe<Array<Chassis_Organization_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chassis_Organization_Order_By>>;
  where?: Maybe<Chassis_Organization_Bool_Exp>;
};

export type Query_RootChassis_Organization_By_PkArgs = {
  id: Scalars['Int'];
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

export type Query_RootFolderArgs = {
  distinct_on?: Maybe<Array<Folder_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Folder_Order_By>>;
  where?: Maybe<Folder_Bool_Exp>;
};

export type Query_RootFolder_AggregateArgs = {
  distinct_on?: Maybe<Array<Folder_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Folder_Order_By>>;
  where?: Maybe<Folder_Bool_Exp>;
};

export type Query_RootFolder_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Query_RootOrganizationArgs = {
  distinct_on?: Maybe<Array<Organization_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organization_Order_By>>;
  where?: Maybe<Organization_Bool_Exp>;
};

export type Query_RootOrganization_AggregateArgs = {
  distinct_on?: Maybe<Array<Organization_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organization_Order_By>>;
  where?: Maybe<Organization_Bool_Exp>;
};

export type Query_RootOrganization_By_PkArgs = {
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

export type Query_RootPart_RelationArgs = {
  distinct_on?: Maybe<Array<Part_Relation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Part_Relation_Order_By>>;
  where?: Maybe<Part_Relation_Bool_Exp>;
};

export type Query_RootPart_Relation_AggregateArgs = {
  distinct_on?: Maybe<Array<Part_Relation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Part_Relation_Order_By>>;
  where?: Maybe<Part_Relation_Bool_Exp>;
};

export type Query_RootPart_Relation_By_PkArgs = {
  id: Scalars['Int'];
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
  /** fetch data from the table: "annotation" */
  annotation: Array<Annotation>;
  /** fetch aggregated fields from the table: "annotation" */
  annotation_aggregate: Annotation_Aggregate;
  /** fetch data from the table: "annotation" using primary key columns */
  annotation_by_pk?: Maybe<Annotation>;
  /** fetch data from the table: "chassis" */
  chassis: Array<Chassis>;
  /** fetch aggregated fields from the table: "chassis" */
  chassis_aggregate: Chassis_Aggregate;
  /** fetch data from the table: "chassis" using primary key columns */
  chassis_by_pk?: Maybe<Chassis>;
  /** fetch data from the table: "chassis_organization" */
  chassis_organization: Array<Chassis_Organization>;
  /** fetch aggregated fields from the table: "chassis_organization" */
  chassis_organization_aggregate: Chassis_Organization_Aggregate;
  /** fetch data from the table: "chassis_organization" using primary key columns */
  chassis_organization_by_pk?: Maybe<Chassis_Organization>;
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
  /** fetch data from the table: "folder" */
  folder: Array<Folder>;
  /** fetch aggregated fields from the table: "folder" */
  folder_aggregate: Folder_Aggregate;
  /** fetch data from the table: "folder" using primary key columns */
  folder_by_pk?: Maybe<Folder>;
  /** fetch data from the table: "organization" */
  organization: Array<Organization>;
  /** fetch aggregated fields from the table: "organization" */
  organization_aggregate: Organization_Aggregate;
  /** fetch data from the table: "organization" using primary key columns */
  organization_by_pk?: Maybe<Organization>;
  /** fetch data from the table: "part" */
  part: Array<Part>;
  /** fetch aggregated fields from the table: "part" */
  part_aggregate: Part_Aggregate;
  /** fetch data from the table: "part" using primary key columns */
  part_by_pk?: Maybe<Part>;
  /** fetch data from the table: "part_relation" */
  part_relation: Array<Part_Relation>;
  /** fetch aggregated fields from the table: "part_relation" */
  part_relation_aggregate: Part_Relation_Aggregate;
  /** fetch data from the table: "part_relation" using primary key columns */
  part_relation_by_pk?: Maybe<Part_Relation>;
  /** fetch data from the table: "part_type" */
  part_type: Array<Part_Type>;
  /** fetch aggregated fields from the table: "part_type" */
  part_type_aggregate: Part_Type_Aggregate;
  /** fetch data from the table: "part_type" using primary key columns */
  part_type_by_pk?: Maybe<Part_Type>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};

export type Subscription_RootAnnotationArgs = {
  distinct_on?: Maybe<Array<Annotation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Annotation_Order_By>>;
  where?: Maybe<Annotation_Bool_Exp>;
};

export type Subscription_RootAnnotation_AggregateArgs = {
  distinct_on?: Maybe<Array<Annotation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Annotation_Order_By>>;
  where?: Maybe<Annotation_Bool_Exp>;
};

export type Subscription_RootAnnotation_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_RootChassisArgs = {
  distinct_on?: Maybe<Array<Chassis_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chassis_Order_By>>;
  where?: Maybe<Chassis_Bool_Exp>;
};

export type Subscription_RootChassis_AggregateArgs = {
  distinct_on?: Maybe<Array<Chassis_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chassis_Order_By>>;
  where?: Maybe<Chassis_Bool_Exp>;
};

export type Subscription_RootChassis_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootChassis_OrganizationArgs = {
  distinct_on?: Maybe<Array<Chassis_Organization_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chassis_Organization_Order_By>>;
  where?: Maybe<Chassis_Organization_Bool_Exp>;
};

export type Subscription_RootChassis_Organization_AggregateArgs = {
  distinct_on?: Maybe<Array<Chassis_Organization_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chassis_Organization_Order_By>>;
  where?: Maybe<Chassis_Organization_Bool_Exp>;
};

export type Subscription_RootChassis_Organization_By_PkArgs = {
  id: Scalars['Int'];
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

export type Subscription_RootFolderArgs = {
  distinct_on?: Maybe<Array<Folder_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Folder_Order_By>>;
  where?: Maybe<Folder_Bool_Exp>;
};

export type Subscription_RootFolder_AggregateArgs = {
  distinct_on?: Maybe<Array<Folder_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Folder_Order_By>>;
  where?: Maybe<Folder_Bool_Exp>;
};

export type Subscription_RootFolder_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_RootOrganizationArgs = {
  distinct_on?: Maybe<Array<Organization_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organization_Order_By>>;
  where?: Maybe<Organization_Bool_Exp>;
};

export type Subscription_RootOrganization_AggregateArgs = {
  distinct_on?: Maybe<Array<Organization_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Organization_Order_By>>;
  where?: Maybe<Organization_Bool_Exp>;
};

export type Subscription_RootOrganization_By_PkArgs = {
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

export type Subscription_RootPart_RelationArgs = {
  distinct_on?: Maybe<Array<Part_Relation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Part_Relation_Order_By>>;
  where?: Maybe<Part_Relation_Bool_Exp>;
};

export type Subscription_RootPart_Relation_AggregateArgs = {
  distinct_on?: Maybe<Array<Part_Relation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Part_Relation_Order_By>>;
  where?: Maybe<Part_Relation_Bool_Exp>;
};

export type Subscription_RootPart_Relation_By_PkArgs = {
  id: Scalars['Int'];
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
  /** An object relationship */
  organization?: Maybe<Organization>;
  organization_name?: Maybe<Scalars['String']>;
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

/** order by aggregate values of table "user" */
export type User_Aggregate_Order_By = {
  avg?: Maybe<User_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<User_Max_Order_By>;
  min?: Maybe<User_Min_Order_By>;
  stddev?: Maybe<User_Stddev_Order_By>;
  stddev_pop?: Maybe<User_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<User_Stddev_Samp_Order_By>;
  sum?: Maybe<User_Sum_Order_By>;
  var_pop?: Maybe<User_Var_Pop_Order_By>;
  var_samp?: Maybe<User_Var_Samp_Order_By>;
  variance?: Maybe<User_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user" */
export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<User_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
  __typename?: 'user_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user" */
export type User_Avg_Order_By = {
  id?: Maybe<Order_By>;
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
  organization?: Maybe<Organization_Bool_Exp>;
  organization_name?: Maybe<String_Comparison_Exp>;
  username?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserIdKey = 'user_id_key',
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
  organization?: Maybe<Organization_Obj_Rel_Insert_Input>;
  organization_name?: Maybe<Scalars['String']>;
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
  organization_name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "user" */
export type User_Max_Order_By = {
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_login?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  organization_name?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_login?: Maybe<Scalars['timestamptz']>;
  last_name?: Maybe<Scalars['String']>;
  organization_name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "user" */
export type User_Min_Order_By = {
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_login?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  organization_name?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
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
  organization?: Maybe<Organization_Order_By>;
  organization_name?: Maybe<Order_By>;
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
  OrganizationName = 'organization_name',
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
  organization_name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
  __typename?: 'user_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user" */
export type User_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  __typename?: 'user_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user" */
export type User_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  __typename?: 'user_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user" */
export type User_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
  __typename?: 'user_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user" */
export type User_Sum_Order_By = {
  id?: Maybe<Order_By>;
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
  OrganizationName = 'organization_name',
  /** column name */
  Username = 'username',
}

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
  __typename?: 'user_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user" */
export type User_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  __typename?: 'user_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user" */
export type User_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
  __typename?: 'user_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user" */
export type User_Variance_Order_By = {
  id?: Maybe<Order_By>;
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

export type ConstructFieldsFragment = {
  __typename?: 'construct';
  id: any;
  name: string;
  sequence?: string | null | undefined;
  sequence_length?: number | null | undefined;
};

export type ConstructPartFieldsFragment = {
  __typename?: 'construct_part';
  construct_id: any;
  id: any;
  index: number;
  orientation: string;
  part_id?: any | null | undefined;
};

export type ConstructQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;

export type ConstructQuery = {
  __typename?: 'query_root';
  construct: Array<{
    __typename?: 'construct';
    id: any;
    name: string;
    sequence?: string | null | undefined;
    sequence_length?: number | null | undefined;
    folder?: { __typename?: 'folder'; id: any } | null | undefined;
    parts: Array<{
      __typename?: 'construct_part';
      construct_id: any;
      id: any;
      index: number;
      orientation: string;
      part_id?: any | null | undefined;
      construct: {
        __typename?: 'construct';
        id: any;
        name: string;
        sequence?: string | null | undefined;
        sequence_length?: number | null | undefined;
      };
      part?:
        | {
            __typename?: 'part';
            alias?: string | null | undefined;
            description?: string | null | undefined;
            id: any;
            name: string;
            sequence?: string | null | undefined;
            sequence_length?: number | null | undefined;
            type?:
              | {
                  __typename?: 'part_type';
                  glyph?: string | null | undefined;
                  name: string;
                  slug?: string | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
    }>;
    annotations: Array<{
      __typename?: 'annotation';
      start?: number | null | undefined;
      end?: number | null | undefined;
      label?: string | null | undefined;
      id: any;
      construct_part_id?: any | null | undefined;
    }>;
  }>;
};

export type ConstructTemplatesQueryVariables = Exact<{ [key: string]: never }>;

export type ConstructTemplatesQuery = {
  __typename?: 'query_root';
  template: Array<{
    __typename?: 'construct';
    id: any;
    name: string;
    parts: Array<{
      __typename?: 'construct_part';
      construct_id: any;
      id: any;
      index: number;
      orientation: string;
      part_id?: any | null | undefined;
      part?:
        | {
            __typename?: 'part';
            alias?: string | null | undefined;
            description?: string | null | undefined;
            id: any;
            name: string;
            sequence?: string | null | undefined;
            sequence_length?: number | null | undefined;
            type?:
              | {
                  __typename?: 'part_type';
                  glyph?: string | null | undefined;
                  name: string;
                  slug?: string | null | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined;
    }>;
  }>;
};

export type CreateConstructMutationVariables = Exact<{
  input: Construct_Insert_Input;
}>;

export type CreateConstructMutation = {
  __typename?: 'mutation_root';
  insert_construct_one?:
    | {
        __typename?: 'construct';
        id: any;
        name: string;
        sequence?: string | null | undefined;
        sequence_length?: number | null | undefined;
      }
    | null
    | undefined;
};

export type UpdateConstructMutationVariables = Exact<{
  id: Scalars['uuid'];
  input: Construct_Set_Input;
}>;

export type UpdateConstructMutation = {
  __typename?: 'mutation_root';
  update_construct_by_pk?:
    | {
        __typename?: 'construct';
        id: any;
        name: string;
        sequence?: string | null | undefined;
        sequence_length?: number | null | undefined;
      }
    | null
    | undefined;
};

export type InsertConstructPartMutationVariables = Exact<{
  construct_id: Scalars['uuid'];
  input: Array<Construct_Part_Insert_Input> | Construct_Part_Insert_Input;
}>;

export type InsertConstructPartMutation = {
  __typename?: 'mutation_root';
  delete_construct_part?:
    | { __typename?: 'construct_part_mutation_response'; affected_rows: number }
    | null
    | undefined;
  insert_construct_part?:
    | {
        __typename?: 'construct_part_mutation_response';
        returning: Array<{
          __typename?: 'construct_part';
          construct_id: any;
          id: any;
          index: number;
          orientation: string;
          part_id?: any | null | undefined;
          part?:
            | {
                __typename?: 'part';
                alias?: string | null | undefined;
                description?: string | null | undefined;
                id: any;
                name: string;
                sequence?: string | null | undefined;
                sequence_length?: number | null | undefined;
                type?:
                  | {
                      __typename?: 'part_type';
                      glyph?: string | null | undefined;
                      name: string;
                      slug?: string | null | undefined;
                    }
                  | null
                  | undefined;
              }
            | null
            | undefined;
        }>;
      }
    | null
    | undefined;
};

export type InsertAnnotationMutationVariables = Exact<{
  construct_id: Scalars['uuid'];
  input: Array<Annotation_Insert_Input> | Annotation_Insert_Input;
}>;

export type InsertAnnotationMutation = {
  __typename?: 'mutation_root';
  delete_annotation?:
    | { __typename?: 'annotation_mutation_response'; affected_rows: number }
    | null
    | undefined;
  insert_annotation?:
    | {
        __typename?: 'annotation_mutation_response';
        returning: Array<{
          __typename?: 'annotation';
          construct_id?: any | null | undefined;
          label?: string | null | undefined;
          id: any;
          start?: number | null | undefined;
          end?: number | null | undefined;
        }>;
      }
    | null
    | undefined;
};

export type FolderFieldsFragment = {
  __typename?: 'folder';
  id: any;
  name: string;
  description: string;
};

export type FoldersQueryVariables = Exact<{ [key: string]: never }>;

export type FoldersQuery = {
  __typename?: 'query_root';
  folder: Array<{
    __typename?: 'folder';
    id: any;
    name: string;
    description: string;
    constructs: Array<{
      __typename?: 'construct';
      id: any;
      name: string;
      sequence?: string | null | undefined;
      sequence_length?: number | null | undefined;
    }>;
  }>;
};

export type FolderQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;

export type FolderQuery = {
  __typename?: 'query_root';
  folder: Array<{
    __typename?: 'folder';
    id: any;
    name: string;
    description: string;
  }>;
};

export type CreateFolderMutationVariables = Exact<{
  input: Folder_Insert_Input;
}>;

export type CreateFolderMutation = {
  __typename?: 'mutation_root';
  insert_folder_one?:
    | { __typename?: 'folder'; id: any; name: string }
    | null
    | undefined;
};

export type UpdateFolderMutationVariables = Exact<{
  id: Scalars['uuid'];
  input: Folder_Set_Input;
}>;

export type UpdateFolderMutation = {
  __typename?: 'mutation_root';
  update_folder_by_pk?:
    | { __typename?: 'folder'; id: any; name: string; description: string }
    | null
    | undefined;
};

export type PartTypeFieldsFragment = {
  __typename?: 'part_type';
  glyph?: string | null | undefined;
  id: number;
  name: string;
};

export type PartTypesQueryVariables = Exact<{ [key: string]: never }>;

export type PartTypesQuery = {
  __typename?: 'query_root';
  part_type: Array<{
    __typename?: 'part_type';
    glyph?: string | null | undefined;
    id: number;
    name: string;
  }>;
};

export type PartFieldsFragment = {
  __typename?: 'part';
  alias?: string | null | undefined;
  description?: string | null | undefined;
  id: any;
  name: string;
  sequence?: string | null | undefined;
  sequence_length?: number | null | undefined;
  type?:
    | {
        __typename?: 'part_type';
        glyph?: string | null | undefined;
        name: string;
        slug?: string | null | undefined;
      }
    | null
    | undefined;
};

export type PartsQueryVariables = Exact<{ [key: string]: never }>;

export type PartsQuery = {
  __typename?: 'query_root';
  part: Array<{
    __typename?: 'part';
    alias?: string | null | undefined;
    description?: string | null | undefined;
    id: any;
    name: string;
    sequence?: string | null | undefined;
    sequence_length?: number | null | undefined;
    type?:
      | {
          __typename?: 'part_type';
          glyph?: string | null | undefined;
          name: string;
          slug?: string | null | undefined;
        }
      | null
      | undefined;
  }>;
};

export const ConstructFieldsFragmentDoc = gql`
  fragment ConstructFields on construct {
    id
    name
    sequence
    sequence_length
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
export const FolderFieldsFragmentDoc = gql`
  fragment FolderFields on folder {
    id
    name
    description
  }
`;
export const PartTypeFieldsFragmentDoc = gql`
  fragment PartTypeFields on part_type {
    glyph
    id
    name
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
    type {
      glyph
      name
      slug
    }
  }
`;
export const ConstructDocument = gql`
  query Construct($id: uuid!) {
    construct(where: { id: { _eq: $id } }) {
      ...ConstructFields
      folder {
        id
      }
      parts(order_by: { index: asc }) {
        ...ConstructPartFields
        construct {
          ...ConstructFields
        }
        part {
          ...PartFields
        }
      }
      annotations {
        start
        end
        label
        id
        construct_part_id
      }
    }
  }
  ${ConstructFieldsFragmentDoc}
  ${ConstructPartFieldsFragmentDoc}
  ${PartFieldsFragmentDoc}
`;
export const ConstructTemplatesDocument = gql`
  query ConstructTemplates {
    template: construct(where: { is_template: { _eq: true } }) {
      id
      name
      parts(order_by: { index: asc }) {
        ...ConstructPartFields
        part {
          ...PartFields
        }
      }
    }
  }
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
        part {
          ...PartFields
        }
      }
    }
  }
  ${ConstructPartFieldsFragmentDoc}
  ${PartFieldsFragmentDoc}
`;
export const InsertAnnotationDocument = gql`
  mutation InsertAnnotation(
    $construct_id: uuid!
    $input: [annotation_insert_input!]!
  ) {
    delete_annotation(where: { construct_id: { _eq: $construct_id } }) {
      affected_rows
    }
    insert_annotation(
      objects: $input
      on_conflict: {
        constraint: annotation_pkey
        update_columns: [start, end, label]
      }
    ) {
      returning {
        construct_id
        label
        id
        start
        end
      }
    }
  }
`;
export const FoldersDocument = gql`
  query Folders {
    folder(order_by: { created_at: desc }) {
      ...FolderFields
      constructs(order_by: { created_at: desc }) {
        ...ConstructFields
      }
    }
  }
  ${FolderFieldsFragmentDoc}
  ${ConstructFieldsFragmentDoc}
`;
export const FolderDocument = gql`
  query Folder($id: uuid!) {
    folder(where: { id: { _eq: $id } }) {
      ...FolderFields
    }
  }
  ${FolderFieldsFragmentDoc}
`;
export const CreateFolderDocument = gql`
  mutation CreateFolder($input: folder_insert_input!) {
    insert_folder_one(object: $input) {
      id
      name
    }
  }
`;
export const UpdateFolderDocument = gql`
  mutation UpdateFolder($id: uuid!, $input: folder_set_input!) {
    update_folder_by_pk(pk_columns: { id: $id }, _set: $input) {
      ...FolderFields
    }
  }
  ${FolderFieldsFragmentDoc}
`;
export const PartTypesDocument = gql`
  query PartTypes {
    part_type(
      order_by: { id: asc }
      where: {
        slug: {
          _in: [
            "3-utr"
            "5-utr"
            "cds"
            "fluorescent-protein"
            "insulator"
            "intron"
            "irdr"
            "miscellaneous"
            "pol-ii-promoter"
            "polyadenylation-signal"
            "recombinase"
            "seam-unspecified"
          ]
        }
      }
    ) {
      ...PartTypeFields
    }
  }
  ${PartTypeFieldsFragmentDoc}
`;
export const PartsDocument = gql`
  query Parts {
    part(
      order_by: { part_type_id: desc }
      where: { type: { name: { _neq: "CDS" } } }
    ) {
      ...PartFields
    }
  }
  ${PartFieldsFragmentDoc}
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
    ConstructTemplates(
      variables?: ConstructTemplatesQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<ConstructTemplatesQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<ConstructTemplatesQuery>(
            ConstructTemplatesDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'ConstructTemplates'
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
    InsertAnnotation(
      variables: InsertAnnotationMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<InsertAnnotationMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<InsertAnnotationMutation>(
            InsertAnnotationDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'InsertAnnotation'
      );
    },
    Folders(
      variables?: FoldersQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<FoldersQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<FoldersQuery>(FoldersDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'Folders'
      );
    },
    Folder(
      variables: FolderQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<FolderQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<FolderQuery>(FolderDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'Folder'
      );
    },
    CreateFolder(
      variables: CreateFolderMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<CreateFolderMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateFolderMutation>(
            CreateFolderDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'CreateFolder'
      );
    },
    UpdateFolder(
      variables: UpdateFolderMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<UpdateFolderMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdateFolderMutation>(
            UpdateFolderDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'UpdateFolder'
      );
    },
    PartTypes(
      variables?: PartTypesQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<PartTypesQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<PartTypesQuery>(PartTypesDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'PartTypes'
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
    useConstructTemplates(
      key: SWRKeyInterface,
      variables?: ConstructTemplatesQueryVariables,
      config?: SWRConfigInterface<ConstructTemplatesQuery, ClientError>
    ) {
      return useSWR<ConstructTemplatesQuery, ClientError>(
        key,
        () => sdk.ConstructTemplates(variables),
        config
      );
    },
    useFolders(
      key: SWRKeyInterface,
      variables?: FoldersQueryVariables,
      config?: SWRConfigInterface<FoldersQuery, ClientError>
    ) {
      return useSWR<FoldersQuery, ClientError>(
        key,
        () => sdk.Folders(variables),
        config
      );
    },
    useFolder(
      key: SWRKeyInterface,
      variables: FolderQueryVariables,
      config?: SWRConfigInterface<FolderQuery, ClientError>
    ) {
      return useSWR<FolderQuery, ClientError>(
        key,
        () => sdk.Folder(variables),
        config
      );
    },
    usePartTypes(
      key: SWRKeyInterface,
      variables?: PartTypesQueryVariables,
      config?: SWRConfigInterface<PartTypesQuery, ClientError>
    ) {
      return useSWR<PartTypesQuery, ClientError>(
        key,
        () => sdk.PartTypes(variables),
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
  };
}
export type SdkWithHooks = ReturnType<typeof getSdkWithHooks>;
