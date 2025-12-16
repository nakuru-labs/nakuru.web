# Lens — API & Customization

The Lens module (`FludexInfoModule`) is fully extensible via code. You can inject custom widgets into the existing system tabs or create entirely new pages to visualize specific game data.

## Initialization 

```csharp
// Make sure to initialize FludeX before using any of the modules
FludeX.Instance.Initialize();

// Get reference to the System Info module
var systemInfoModule = FludeX.Instance.Module<FludexInfoModule>();
```

## Add Custom Widgets

```csharp
// a simple toggle property
private bool ToggleValue { get; set; }

// Create a custom widget with a toggle 
private Widget.Descriptor BuildCustomWidget() =>
    Widget.Create()
        .WithTitle("Custom Widget")
        .WithToggle("Custom Toggle", () => ToggleValue)
        .Build();
    

// Add a custom widget to the System page
systemInfoModule.AddSystemWidget(BuildCustomWidget());

// Add a custom widget to the Display page
systemInfoModule.AddDisplayWidget(BuildCustomWidget());

// Add a custom widget to the Build page
systemInfoModule.AddBuildWidget(BuildCustomWidget());

// Add a custom widget to the Runtime page
systemInfoModule.AddRuntimeWidget(BuildCustomWidget());
```

## Add Custom Page

```csharp
// Create a custom page
var customPage = new WidgetsPageDescriptor("Custom Page");

// Add a custom widget to theç page
result.AddWidget(BuildCustomWidget());

// Add the custom page
systemInfoModule.AddCustomPage(customPage);
```