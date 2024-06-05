# infra

## Infrastructure

The fundamental setup involves storing the compiled code in an S3 bucket and distributing it through CloudFront. The domain name will be directed to the CloudFront CNAME.

```mermaid
graph LR
   Customers --> |edgecafe.qro.equipweb.biz| Cloudfront
   Cloudfront --> S3
```

### Naming convention

`edgecafetraining.qro-dev.equipweb.biz` - Used by developers to test in S3 and Cloudfront.

`edgecafetraining.qro-uat.equipweb.biz` - Used by QA to test a set of new features and bug fixes. This will allow the developers to continue working on new features without changing the code base that QA team is testing.

`edgecafe.qro.equipweb.biz` - This is the latest stable version tested by QA. It will be used for creating/updating client production websites.

`<clientname>.qro.equipweb.biz` - Client production website.

`<clientname>.qro-rc.equipweb.biz` - Used by developers and QA to do hot fixes on older versions.

### Normal Deployment Cycle

```mermaid
graph TB
 DEV["`DEV
 edgecafetraining.qro-dev`"] --> UAT
 UAT["`UAT
 edgecafetraining.qro-uat`"] --> Prod
 Prod["`Prod
 edgecafe.qro`"] --> Clients
 Clients["`Clients
 clientname.qro`"]
```

#### Deploy to Dev

```mermaid
graph LR
 Developer --> | Push code | Github --> |  PR Approved |GA(Github Action) --> | Auto deploy |Dev
 Dev
```

- Every time a PR is merged, Github action will auto run and deploy to `Dev` environment

#### Deploy to UAT

```mermaid
graph LR
 Developer --> | manual trigger | GA["`Github Action
 Deploy to UAT`"]
 GA --> | deploy |UAT
```

- To deploy to `UAT`, you'll need manually trigger the `Deploy to UAT` Github action.
- This will take the version in `Dev` environment and deploy the same version to `UAT`.

#### Deploy to Prod

```mermaid
graph LR
 Developer --> | manual trigger | GA["`Github Action
 Deploy to Prod`"]
 GA --> | deploy |Prod
```

- To deploy to `Prod` after QA approval, you'll need manually trigger the `Deploy to Prod` Github action.
- This will take the version in `UAT` environment and deploy the same version to `Prod`.

#### Deploy to Clients

```mermaid
graph LR
 Deployment[Deployment Team] --> | manual trigger | GA["`Github Action
 Deploy to Client`"]
 GA --> | deploy |Client
```

- To deploy to `Client`, you'll need to manually trigger the `Deploy to Client` Github action and specify the domain name and API URL.

  Example values:

  - Domain name: `amazingcafe.qro.equipweb.biz`
  - API URL: `https://s2.equipweb.biz/AmazingCafe/ordering/api`

- This will copy the most stable version(edgecafe.qro.equipweb.biz) of the app to the client website.

### RC Deployment Cycle

```mermaid
flowchart TB
    subgraph Normal [Normal flow]
    DEV["`DEV
    edgecafetraining.qro-dev`"]
    UAT["`UAT
    edgecafetraining.qro-uat`"]
    Prod["`Prod
    edgecafe.qro`"]
    Clients["`Clients
    clientname.qro`"]
    end
    subgraph Hotfix [Hot fix]
    RC["`RC
    clientname.qro-rc`"]
    end
    DEV --> UAT
    UAT --> Prod
    Prod --> Clients
    RC --> |Recommended|DEV
    RC --> |Not recommended|Clients


```

#### Deploy to RC

```mermaid
graph LR
 Developers --> | manual trigger | GA["`Github Action
 Deploy to RC`"]
 GA --> | deploy |RC
```

- To deploy to `RC`, you'll need to manually trigger the `Deploy to RC` Github action and specify the branch, domain name and API URL.

  Example values:

  - Domain name: `amazingcafe.qro-rc.equipweb.biz`
  - API URL: `https://t1.equipweb.biz/AmazingCafeTraining/ordering/api`

- The branch name cannot be `main`.
- After QA have approved the RC, the `recommended` flow would be to PR(merge) the changes to the `main` branch and follow the normal cycle. For cases that this cannot be followed, use the 'Deploy from RC to Client`.

#### Deploy from RC to Client

```mermaid
graph LR
 Developers --> | manual trigger | GA["`Github Action
 Deploy from RC to Client`"]
 GA --> | deploy |Client
```

- To deploy from `RC` to `Client`, you'll need to manually trigger the `Deploy from RC to Client` Github action and specify the branch, domain name and API URL.

  Example values:

  - Domain name: `amazingcafe.qro.equipweb.biz`
  - API URL: `https://s2.equipweb.biz/AmazingCafe/ordering/api`

- The branch name cannot be `main`.
- Do this only only exceptional cases.
- This should be approved by the QA.
